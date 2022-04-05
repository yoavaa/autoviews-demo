import { AutoViewProps, AutoItems, AutoFields } from "@autoviews/core";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import { AutoHeaders } from "./autoExtensions";

export const MUITable = (props: AutoViewProps) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650
        }}
      >
        <TableHead>
          <TableRow>
            <AutoHeaders {...props}>
              {(header, i) => <TableCell key={i}>{header}</TableCell>}
            </AutoHeaders>
          </TableRow>
        </TableHead>
        <TableBody>
          <AutoItems {...props} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const MUITableRow = (props: AutoViewProps) => {
  return (
    <TableRow>
      <AutoFields {...props} />
    </TableRow>
  );
};
