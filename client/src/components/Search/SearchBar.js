import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { ChartContext } from "../../context/ChartContext";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const { chartObj, setChartObj, getAllCharts, getChartsBySearch } =
    useContext(ChartContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = async () => {
    const input = document.getElementById("search-input").value;
    if (input) {
      let charts = await getChartsBySearch(input);
      setChartObj(charts);
    }
    //setSearchInput(document.querySelector("#search-input").value);
    //console.log(input);
  };

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{ width: "100%", padding: "2px 12px 0 12px" }}
    >
      <Stack direction="row">
        <Input
          id="search-input"
          disableUnderline={true}
          variant="standard"
          fullWidth
        />
        <Divider orientation="vertical" />
        <IconButton onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default SearchBar;
