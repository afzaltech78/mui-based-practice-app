/** @format */
"use client";
import { Button, Typography } from "@mui/material";
import { CustomTextInput } from "./CustomTextInput";
import { CustomLabelButton } from "./CustomLabelButton";
import { CustomButton } from "./CustomButton";
import styles from "../assets/css/components/LoginForm.module.css";
import { CustomImage } from "./CustomImage";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { useState } from "react";
export const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.subContainer}>
          <CustomImage
            src={"/fg_icon.png"}
            alt="fg-icon"
            className={styles.fg_icon}
          />
          <CustomImage
            src={"/country.png"}
            alt="country-icon"
            className={styles.country_icon}
          />
        </div>

        <CustomTextInput
          type="email"
          inputLabel="Email"
          sx={{ marginBottom: 3 }}
        />

        <CustomTextInput
          inputLabel="Password"
          type={passwordVisible ? "text" : "password"}
          rightIcon={
            passwordVisible ? (
              <VisibilityRoundedIcon />
            ) : (
              <VisibilityOffRoundedIcon />
            )
          }
          onRightIconPress={() => setPasswordVisible(!passwordVisible)}
        />

        <CustomLabelButton className={styles.customLabelButton}>
          Forget Password?
        </CustomLabelButton>

        <CustomButton className={styles.customButton}>Sign In</CustomButton>

        <Typography className={styles.signUp}>
          Create a New Account?{" "}
          <CustomLabelButton>
            <b>Sign Up</b>
          </CustomLabelButton>
        </Typography>
      </div>
    </div>
  );
};
