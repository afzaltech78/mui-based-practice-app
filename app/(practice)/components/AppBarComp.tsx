/** @format */
"use client";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
// import { Bars3Icon as MenuIcon } from "@heroicons/react/24/outline";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

export const AppBarComp = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      {/* ---------------->>> Toolbar is here <<<----------------*/}
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}>
          <MenuIcon />
          {/* <MenuIcon className="w-8 " color="white" /> */}
        </IconButton>
        {/* <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
          Home
        </Typography>
        <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
          News
        </Typography>
        <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
          About
        </Typography> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Contact
        </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit">
          <AccountCircle />
        </IconButton>

        {/* ---------------->>> Menu is here <<<----------------*/}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
