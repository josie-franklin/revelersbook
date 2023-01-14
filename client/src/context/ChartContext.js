import React, { createContext, Component } from "react";
import * as chartApi from "../api/chartApi";

export const ChartContext = createContext();

class ChartContextProvider extends Component {
  state = {
    chartObj: null,
  };

  setChartObj = (charts) => {
    this.setState({ chartObj: charts });
  };

  getAllCharts = async () => {
    let charts = await chartApi.getAllCharts();
    return charts;
  };

  getChartsBySearch = async (input) => {
    let charts = await chartApi.getChartsBySearch(input);
    return charts;
  };

  render() {
    return (
      <ChartContext.Provider
        value={{
          chartObj: this.state.chartObj,
          setChartObj: this.setChartObj,
          getAllCharts: this.getAllCharts,
          getChartsBySearch: this.getChartsBySearch,
        }}
      >
        {this.props.children}
      </ChartContext.Provider>
    );
  }
}

export default ChartContextProvider;
