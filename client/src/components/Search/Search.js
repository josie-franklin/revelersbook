import React, { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Results from "./SearchResults";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

const SearchPage = () => {
  useEffect(() => {}, []);

  return (
    <Box className="flex-column align-center">
      <Stack spacing={2} alignItems="center">
        <Typography variant="h1" sx={{ fontSize: "3rem" }}>
          NC Revelers Orchestra Book
        </Typography>

        <SearchBar />

        <Results />
      </Stack>
    </Box>
  );
};

export default SearchPage;
