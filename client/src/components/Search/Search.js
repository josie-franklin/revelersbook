import React, { useState, useContext, useEffect } from "react";
import { styled } from "@mui/system";
import SearchBar from "../reusable/SearchBar";
import SearchResults from "../reusable/SearchResults";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

const HeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

const Search = () => {
  const [pageShowing, setPageShowing] = useState("search");

  return (
    <Box className="flex-column align-center padding">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <HeaderText variant="h1">
          Search by number, title, composer, or arranger.
        </HeaderText>

        <SearchBar />

        <SearchResults pageShowing={pageShowing} />
      </Stack>
    </Box>
  );
};

export default Search;
