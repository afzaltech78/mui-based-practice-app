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
import Link from "next/link";
export const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
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

        <CustomButton
          className={styles.customButton}
          onClick={() => alert("Sign in success")}>
          Sign In
        </CustomButton>

        <Typography className={styles.signUp}>
          Create a New Account?{"  "}
          <Link href="/register" className="text-black">
            <b>Sign Up</b>
          </Link>
        </Typography>
      </form>
    </div>
  );
};
