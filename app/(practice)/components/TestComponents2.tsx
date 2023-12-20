/** @format */
"use client";
import { top100Films } from "@/public/constants";
import { MoreVert } from "@mui/icons-material";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const TestComponents2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ margin: 15 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>

      {/* list example */}
      <List sx={{ width: 300 }}>
        <ListItem>
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemIcon>{">"}</ListItemIcon>
            <ListItemText primary={"List example"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={open}>
        <List sx={{ width: 300 }}>
          <ListItem>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemIcon>{">"}</ListItemIcon>
              <ListItemText primary={"Jhon"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Collapse>

      {/* example of autocomplete text */}
      <Autocomplete
        options={top100Films}
        renderInput={(params) => (
          <TextField {...params} label="List of Movie" />
        )}
        id="combo-box-demo"
        sx={{ width: 300 }}
      />

      <ModalAndDialog />
    </div>
  );
};

const ModalAndDialog = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      {/* add code for dialog */}
      <Button onClick={() => setShowDialog(!showDialog)}>Logout User</Button>
      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        // hideBackdrop
      >
        <DialogTitle>Logout Action</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you want to logout?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)}>Yes</Button>
          <Button onClick={() => setShowDialog(false)}>No</Button>
        </DialogActions>
      </Dialog>
      {/* add code for modal */}
      <Modal open={showDialog} onClose={() => setShowDialog(false)}>
        <Box position={"absolute"} top={"50%"} left={"50%"}>
          Hello i am modal
        </Box>
      </Modal>
    </>
  );
};
