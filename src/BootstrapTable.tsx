import { AutoViewProps, AutoItems } from "@autoviews/core";
import { Table } from "react-bootstrap";
import { AutoHeaders } from "./autoExtensions";

export const BootstrapTable = (props: AutoViewProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <AutoHeaders {...props}>
            {(header, i) => <th key={i}>{header}</th>}
          </AutoHeaders>
        </tr>
      </thead>
      <tbody>
        <AutoItems {...props} />
      </tbody>
    </Table>
  );
};
