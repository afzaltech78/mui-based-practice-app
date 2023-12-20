/** @format */
"use client";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const DrawerComp = ({ menuList }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "rgba(1,35,148,1)" },
        }}
        open={open}
        onClose={() => setOpen(false)}>
        <List>
          {menuList.map((item) => (
            <ListItemButton
              sx={{ color: "white" }}
              divider
              onClick={() => setOpen(false)}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(true)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
