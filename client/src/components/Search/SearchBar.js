import React from "react";
// import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const { searchInput, setSearchInput } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput(document.querySelector("#search-input").value);
    console.log(searchInput);
  };

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{ width: "100%", padding: "2px 12px 0 12px" }}
    >
      <Stack direction="row">
        <Input disableUnderline={true} variant="standard" fullWidth />
        <Divider orientation="vertical" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default SearchBar;
