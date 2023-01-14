import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { ChartContext } from "../../context/ChartContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Results = () => {
  const { chartObj, setChartObj, getAllCharts } = useContext(ChartContext);

  const populateResults = async () => {
    let charts = await getAllCharts();
    setChartObj(charts);
  };

  const renderCharts = () => {
    let render = chartObj.length ? (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book #</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Composer</TableCell>
              <TableCell>Arranger</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chartObj.map((chart) => (
              <TableRow key={chart.id}>
                <TableCell>{chart.bookNumber}</TableCell>
                <TableCell>{chart.title}</TableCell>
                <TableCell>{chart.composer}</TableCell>
                <TableCell>{chart.arranger}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ) : (
      <Typography>No charts were found.</Typography>
    );
    return <div>{render}</div>;
  };

  let contents = !chartObj ? <p>Loading...</p> : renderCharts();

  useEffect(() => {
    if (!chartObj) {
      populateResults();
    }
  }, [chartObj]);

  return <div>{contents}</div>;
};

export default Results;
