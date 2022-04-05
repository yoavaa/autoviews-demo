import {
  AutoViewProps,
  orderFields,
  getHints,
  extractItemUISchema,
  createUISchemaAccessor,
  ACCESSOR_TYPES,
  UNGROUPED,
  createUISchema,
  getPropertiesByGroupName,
  AutoFields
} from "@autoviews/core";
import React from "react";


interface AutoHeaderProps extends AutoViewProps {
  children: (header: string, index: number) => React.ReactNode
}
export const AutoHeaders: React.FunctionComponent<AutoHeaderProps> = 
(props: AutoHeaderProps) => {
  const headers = orderFields(
    Object.keys((props.schema.items as any).properties),
    getHints(extractItemUISchema(props.uiSchema ?? createUISchema()), "").order
  ).map(
    (field) => (props.schema?.items as any).properties[field].title
  ) as string[];
  return(<>
    {headers.map(props.children)}
  </>)
}


interface AutoGroupsProps extends AutoViewProps {
  children: (name: string, groupChildren: React.ReactNode) => React.ReactNode
}

export const AutoGroups: React.FunctionComponent<AutoGroupsProps> = 
(props: AutoGroupsProps) => {
  const itemUISchema = extractItemUISchema(props.uiSchema ?? createUISchema());
  const UISchemaAcessor = createUISchemaAccessor(
    itemUISchema,
    "",
    ACCESSOR_TYPES.object
  );

  const allProperties = Object.keys(props.schema.properties!);
  const groups = UISchemaAcessor.getGroups() ?? [];
  const groupNames = groups.map(({ name }) => name).concat([UNGROUPED]);
  return <>
    {groupNames.map((name) => {
        const fields = getPropertiesByGroupName(
          groups,
          name,
          allProperties
        ).filter((field) => allProperties.includes(field));

        if (!fields.length) return null;

        return props.children(name, (<AutoFields {...props} uiSchema={itemUISchema} pick={fields} />))
      })}
  </>  
}