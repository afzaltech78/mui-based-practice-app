/** @format */
"use client";
import { Button, Typography } from "@mui/material";
import { CustomTextInput } from "./CustomTextInput";
import { CustomButton } from "./CustomButton";
import styles from "../assets/css/components/RegisterForm.module.css";
import { CustomImage } from "./CustomImage";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const router = useRouter();
  const onSubmit = (data) => {
    // e?.preventDefault();
    // console.log("llllll", data);
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={onSubmit}>
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
          type="text"
          inputLabel="Username"
          sx={{ marginBottom: 3 }}
          required
        />
        <CustomTextInput
          type="email"
          inputLabel="Email"
          sx={{ marginBottom: 3 }}
          required
        />
        <CustomTextInput
          type="text"
          inputLabel="Company Name"
          sx={{ marginBottom: 3 }}
          required
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
          sx={{ marginBottom: 3 }}
          required
        />
        <CustomTextInput
          inputLabel="Confirm Password"
          type={confirmPasswordVisible ? "text" : "password"}
          rightIcon={
            confirmPasswordVisible ? (
              <VisibilityRoundedIcon />
            ) : (
              <VisibilityOffRoundedIcon />
            )
          }
          onRightIconPress={() =>
            setConfirmPasswordVisible(!confirmPasswordVisible)
          }
          required
        />

        <CustomButton
          className={styles.customButton}
          // onClick={() => alert("Sign Up success")}
          type="submit">
          Sign Up
        </CustomButton>

        <Typography className={styles.signUp}>
          Already have an Account?
          <Link href="/login" className="text-black font-bold">
            Sign In
          </Link>
        </Typography>
      </form>
    </div>
  );
};
