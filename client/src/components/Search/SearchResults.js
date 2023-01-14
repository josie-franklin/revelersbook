import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { ChartContext } from "../../context/ChartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Results = (props) => {
  const { searchInput } = props;
  const { chartObj, setChartObj, getCharts } = useContext(ChartContext);

  const populateResults = async () => {
    let charts = await getCharts();
    console.log(charts);
  };

  useEffect(() => {
    if (!chartObj) {
      populateResults();
    }
  }, [chartObj]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Composer</TableCell>
            <TableCell>Arranger</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {/* {rows.map((row) => (
            <TableRow>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.composer}</TableCell>
              <TableCell>{row.arranger}</TableCell>
            </TableRow>
          ))} */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Results;
