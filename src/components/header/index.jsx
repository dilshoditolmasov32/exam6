import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "./index.css";

function Header({ onDrawerToggle }) {
  return (
    <AppBar className="header">
      <Toolbar className="toolbar">
        <Grid container spacing={1} alignItems="center">
          <Grid item sx={{ display: { sm: "none", xs: "block" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onDrawerToggle}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
