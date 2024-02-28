import React from "react";
import Paper from "@mui/material/Paper";
import { Table, TableBody, TableContainer, TableHead } from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/table/table-constants";

function TrendingTable() {
  return (
    <Paper variant="elevation" elevation={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <StyledTableRow>
              {["SL No", "Name", "Price", "Return"].map((val, index) => (
                <StyledTableCell key={index}>{val}</StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell>01.</StyledTableCell>
              <StyledTableCell>Trivago</StyledTableCell>
              <StyledTableCell>$520</StyledTableCell>
              <StyledTableCell sx={{ color: "#16DBAA" }}>+5%</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>02.</StyledTableCell>
              <StyledTableCell>Canon</StyledTableCell>
              <StyledTableCell>$480</StyledTableCell>
              <StyledTableCell sx={{ color: "#16DBAA" }}>+10%</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>03.</StyledTableCell>
              <StyledTableCell>Uber Food</StyledTableCell>
              <StyledTableCell>$350</StyledTableCell>
              <StyledTableCell sx={{ color: "#FE5C73" }}>-3%</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>04.</StyledTableCell>
              <StyledTableCell>Nokia</StyledTableCell>
              <StyledTableCell>$940</StyledTableCell>
              <StyledTableCell sx={{ color: "#16DBAA" }}>-3%</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>05.</StyledTableCell>
              <StyledTableCell>Tiktok</StyledTableCell>
              <StyledTableCell>$670</StyledTableCell>
              <StyledTableCell sx={{ color: "#FE5C73" }}>-12%</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>06.</StyledTableCell>
              <StyledTableCell>NAS</StyledTableCell>
              <StyledTableCell>$550</StyledTableCell>
              <StyledTableCell sx={{ color: "#16DBAA" }}>10%</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TrendingTable;
