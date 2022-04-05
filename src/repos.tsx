import React from "react";
import {
  ComponentsRepo,
  AutoFields,
  RootSchemaConsumer,
  isRequired,
  AutoItems
} from "@autoviews/core";
import { TableCell, Box } from "@mui/material";

import { MUITable, MUITableRow } from "./MUITable";
import { BootstrapTable } from "./BootstrapTable";

import { MUIForm, MUIText, MUINumber, MUISwitch, MUISlider } from "./MUIForm";
import {
  BootstrapForm,
  BootstrapText,
  BootstrapNumber,
  BootstrapSwitch
} from "./BootstrapForm";

import { basicRepo as displayRepo } from "./basicRepo";

export const MUIFormRepo = new ComponentsRepo("MUIFormRepo")
  .register("object", {
    name: "formComponent",
    component: MUIForm
  })
  .register("string", {
    name: "textComponent",
    component: MUIText
  })
  .register("number", {
    name: "numberComponent",
    component: MUINumber
  })
  .register("number", {
    name: "sliderComponent",
    component: MUISlider,
    predicate: (schema) => "minimum" in schema && "maximum" in schema
  })
  .register("boolean", {
    name: "switchComponent",
    component: MUISwitch
  })
  .addWrapper(
    (item, props) => (
      <RootSchemaConsumer>
        {({ schema }) => {
          return (
            <Box sx={{ margin: "5px 0" }}>
              {React.cloneElement(item, {
                metadata: {
                  isRequired: isRequired(schema!, props.schemaPointer)
                }
              })}
            </Box>
          );
        }}
      </RootSchemaConsumer>
    ),
    {
      include: [
        "textComponent",
        "numberComponent",
        "switchComponent",
        "sliderComponent"
      ]
    }
  );

export const BootstrapFormRepo = new ComponentsRepo("BootstrapFormRepo")
  .register("object", {
    name: "formComponent",
    component: BootstrapForm
  })
  .register("string", {
    name: "textComponent",
    component: BootstrapText
  })
  .register("number", {
    name: "numberComponent",
    component: BootstrapNumber
  })
  .register("boolean", {
    name: "switchComponent",
    component: BootstrapSwitch
  })
  .addWrapper((item) => <div style={{ margin: "5px 0" }}>{item}</div>, {
    include: ["textComponent", "numberComponent", "switchComponent"]
  });

export const MUITableRepo = displayRepo
  .clone("MUITableRepo")
  .register("array", {
    name: "tableComponent",
    component: MUITable
  })
  .register("object", {
    name: "tableRowComponent",
    component: MUITableRow
  })
  .addWrapper((item) => <TableCell>{item}</TableCell>, {
    include: ["textComponent", "numberComponent", "booleanComponent"]
  });

export const BootstrapTableRepo = displayRepo
  .clone("BootstrapTableRepo")
  .register("array", { name: "tableComponent", component: BootstrapTable })
  .register("object", {
    name: "tableRowComponent",
    component: (props) => (
      <tr>
        <AutoFields {...props} />
      </tr>
    )
  })
  .addWrapper((item) => <td>{item}</td>, {
    include: ["textComponent", "numberComponent", "booleanComponent"]
  });
