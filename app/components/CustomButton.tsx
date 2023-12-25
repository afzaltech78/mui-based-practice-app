/** @format */

import { Button, ButtonProps } from "@mui/material";
import styles from "../assets/css/components/CustomButton.module.css";

export const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="contained"
      className={`${styles.button} ${props.className}`}
      sx={{
        "&:hover": {
          backgroundColor: "#535353",
        },
      }}
    />
  );
};
