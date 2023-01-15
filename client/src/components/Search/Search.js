import React, { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import SearchBar from "./SearchBar";
import Results from "./SearchResults";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

const HeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "2.5rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
  fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    },
}));

const SearchPage = () => {
  useEffect(() => {}, []);

  return (
    <Box className="flex-column align-center">
      <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
        <HeaderText variant="h1">NC Revelers Orchestra Book</HeaderText>

        <SearchBar />

        <Results />
      </Stack>
    </Box>
  );
};

export default SearchPage;
