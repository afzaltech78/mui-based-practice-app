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
import { JSXElementConstructor, ReactElement, useState } from "react";
import Link from "next/link";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  useForm,
} from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = (data) => {
    // e?.preventDefault();
    // console.log("llllll", data);
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
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
        <Controller
          rules={{ required: true }}
          name={"email"}
          control={control}
          render={({ field: { value, onChange } }) => (
            <CustomTextInput
              value={value}
              onChange={(e) => onChange(e.target.value)}
              type="email"
              inputLabel="Email"
              containerStyle={{ marginBottom: "20px" }}
              errorMessage={errors?.email ? "Email is required" : ""}
            />
          )}
        />

        <Controller
          rules={{ required: true }}
          name={"password"}
          control={control}
          render={({ field: { value, onChange } }) => (
            <CustomTextInput
              value={value}
              onChange={(e) => onChange(e.target.value)}
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
              errorMessage={errors?.password ? "Password is required" : ""}
            />
          )}
        />

        <CustomLabelButton className={styles.customLabelButton}>
          Forget Password?
        </CustomLabelButton>
        <CustomButton
          className={styles.customButton}
          type="submit"
          disabled={Object.keys(errors).length > 0}>
          Sign In
        </CustomButton>
        <Typography className={styles.signUp}>
          Create a New Account?
          <Link href="/register" className="text-black font-bold">
            Sign Up
          </Link>
        </Typography>
      </form>
    </div>
  );
};
