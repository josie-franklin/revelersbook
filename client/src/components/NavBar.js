import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const CustomAppBar = styled(AppBar)(() => ({
  backgroundColor: "#d9d9d9",
  boxShadow: "none",
  color: "black",
}));

const NavBar = () => {
  return (
    <Box>
      <CustomAppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: "700" }}>NCRO</Typography>
          <Box sx={{ display: "flex" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ marginLeft: "15px" }}>Search</Typography>
            </Link>
            <Link to="/edit" style={{ textDecoration: "none" }}>
              <Typography sx={{ marginLeft: "15px" }}>Edit</Typography>
            </Link>
          </Box>
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
};

export default NavBar;
