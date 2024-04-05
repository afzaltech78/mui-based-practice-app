/** @format */

import { Header } from "@/app/components/Header";
import styles from "../../assets/css/pages/Dashboard.module.css";
import { Grid, Typography } from "@mui/material";
import { ProductCard } from "@/app/components/ProductCard";

const dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container2}>
        {/* all content comes bellow */}
        <Typography
          variant="h6"
          component="div"
          color={"#8C8888"}
          fontSize={"16px"}
          marginTop={"14px"}>
          Welcome
        </Typography>
        <Typography
          variant="h1"
          component="div"
          fontSize={"26px"}
          fontWeight={"600"}>
          Select Venue
        </Typography>

        {/* product cards */}
        {/* <div className={styles.productsContainer}>
          {[0, 1, 2, 3, 4, 5, 6].map(() => (
            <ProductCard />
          ))}
        </div> */}
        <Grid
          display={"flex"}
          // flexWrap={"wrap"}
          flexDirection={"row"}
          gap={"25px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          container>
          {[0, 1, 2, 3, 4, 5, 6].map(() => (
            <Grid sm={12} lg={3} item>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default dashboard;
