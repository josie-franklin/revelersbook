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
    setChartObj(charts);
  };

  const renderCharts = () => {
    return (
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
    );
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
