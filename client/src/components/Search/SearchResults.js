import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { ChartContext } from "../../context/ChartContext";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Row = styled(Box)(() => ({
  width: "100%",
  padding: "10px",
}));

const Text = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.5rem",
  },
}));

const BoldText = styled(Text)(() => ({
  fontWeight: "700",
}));

const Results = () => {
  const { chartObj, setChartObj, getAllCharts } = useContext(ChartContext);

  const populateResults = async () => {
    let charts = await getAllCharts();
    setChartObj(charts);
  };

  const renderCharts = () => {
    let render = chartObj.length ? (
      <Stack>
        <Row sx={{ borderBottom: "1px solid grey" }}>
          <Grid container spacing={2}>
            <Grid item xs={1.5}>
              <BoldText>Book#</BoldText>
            </Grid>
            <Grid item xs={4.5}>
              <BoldText>Title</BoldText>
            </Grid>
            <Grid item xs={3}>
              <BoldText>Composer</BoldText>
            </Grid>
            <Grid item xs={3}>
              <BoldText>Arranger</BoldText>
            </Grid>
          </Grid>
        </Row>
        {chartObj.map((chart, i) => (
          <Row
            key={chart.id}
            sx={{ backgroundColor: i % 2 === 0 ? "#d9d9d9" : "" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={1.5}>
                <Text>{chart.bookNumber}</Text>
              </Grid>
              <Grid item xs={4.5}>
                <Text>{chart.title}</Text>
              </Grid>
              <Grid item xs={3}>
                <Text>{chart.composer || "---"}</Text>
              </Grid>
              <Grid item xs={3}>
                <Text>{chart.arranger || "---"}</Text>
              </Grid>
            </Grid>
          </Row>
        ))}
      </Stack>
    ) : (
      <Typography>No charts were found.</Typography>
    );
    return <Box>{render}</Box>;
  };

  let contents = !chartObj ? <p>Loading...</p> : renderCharts();

  useEffect(() => {
    if (!chartObj) {
      populateResults();
    }
  }, [chartObj]);

  return <Box sx={{ width: "100%" }}>{contents}</Box>;
};

export default Results;
