/** @format */
"use client";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import DrawerComp from "./DrawerComp";
const menuList = ["My Blogs", "Contact Us", "About us", "Help"];
const RsponsiveAppBar = () => {
  const [tabsValue, setTabsValue] = useState(0);
  const theme = useTheme();
  const isMached = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      sx={[
        {
          background:
            "linear-gradient(90deg, rgba(140,0,0,1) 0%, rgba(1,35,148,1) 51%, rgba(0,212,255,1) 100%);",
        },
        isMached && { flexDirection: "row", alignItems: "center", paddingX: 2 },
      ]}>
      {isMached ? (
        <>
          <Typography>
            <AddShoppingCartIcon />
          </Typography>
          <DrawerComp menuList={menuList} />
        </>
      ) : (
        <Toolbar>
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item sm={2}>
              <Typography>
                <AddShoppingCartIcon />
              </Typography>
            </Grid>
            <Grid sm={6}>
              <Tabs
                value={tabsValue}
                onChange={(e, val) => setTabsValue(val)}
                indicatorColor="secondary"
                textColor="inherit">
                {menuList.map((item, index) => (
                  <Tab key={index} label={item} />
                ))}
              </Tabs>
            </Grid>
            <Grid sm={1} />
            <Grid sm={3}>
              <Box display={"flex"}>
                <Button
                  sx={{ marginLeft: "auto", background: "rgba(140,0,0,1)" }}
                  variant="contained">
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 2, background: "rgba(140,0,0,1)" }}
                  variant="contained">
                  Register
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default RsponsiveAppBar;
