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

  getCharts = async () => {
    let charts = await chartApi.getAllCharts();
    return charts;
  };

  render() {
    return (
      <ChartContext.Provider
        value={{
          chartObj: this.state.chartObj,
          setChartObj: this.setChartObj,
          getCharts: this.getCharts,
        }}
      >
        {this.props.children}
      </ChartContext.Provider>
    );
  }
}

export default ChartContextProvider;
