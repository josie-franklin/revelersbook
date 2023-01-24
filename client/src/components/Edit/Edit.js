import React, { useState, useContext, useEffect } from "react";
import SearchBar from "../reusable/SearchBar";
import SearchResults from "../reusable/SearchResults";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const HeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

const Edit = () => {
  const [pageShowing, setPageShowing] = useState("edit");

  return (
    <Box className="flex-column align-center padding">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <HeaderText variant="h1">Edit the NCRO book.</HeaderText>

        <SearchBar />

        <SearchResults pageShowing={pageShowing} />
      </Stack>
    </Box>
  );
};

export default Edit;
