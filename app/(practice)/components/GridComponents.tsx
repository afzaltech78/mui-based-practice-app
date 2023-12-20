/** @format */
"use client";
import { MoreVert } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const GridComponents = () => {
  const [open, setOpen] = useState(false);
  const CardDesign = () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
  return (
    <div style={{ margin: 15 }}>
      Grid is here
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <CardDesign />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardDesign />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardDesign />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardDesign />
        </Grid>
      </Grid>
    </div>
  );
};
