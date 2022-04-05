import {
  AutoViewProps,
  changeEventHandler,
  clickEventHandler
} from "@autoviews/core";
import { Button, Form } from "react-bootstrap";
import { AutoGroups } from "./autoExtensions";

export const BootstrapForm = (props: AutoViewProps) => {
  return (
    <Form>
      <AutoGroups {...props}>
        {(name, children) => (
          <Form.Group className="shadow p-3 mb-2 bg-light rounded" key={name}>
            {children}
          </Form.Group>
        )}
      </AutoGroups>
      <Button
        variant="success"
        onClick={clickEventHandler({ ...props, data: { action: "SAVE" } })}
      >
        Add
      </Button>
    </Form>
  );
};

export const BootstrapText = (props: AutoViewProps) => {
  return (
    <Form.Control
      value={props.data || ""}
      placeholder={props.schema.title || props.field}
      onChange={changeEventHandler(props, (e) => e.target.value)}
    />
  );
};

export const BootstrapNumber = (props: AutoViewProps) => {
  return (
    <Form.Control
      type="number"
      value={props.data || ""}
      placeholder={props.schema.title || props.field}
      onChange={changeEventHandler(props, (e) => e.target.value)}
    />
  );
};

export const BootstrapSwitch = (props: AutoViewProps) => {
  return (
    <Form.Check
      checked={props.data ?? false}
      onChange={changeEventHandler(props, (e) => e.target.checked)}
      type="switch"
      label={props.schema.title}
    />
  );
};
