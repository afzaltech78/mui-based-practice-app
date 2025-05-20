/** @format */

import {
  IconButton,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import styles from "../assets/css/components/CustomTextInput.module.css";
import { CSSProperties } from "react";
type Props = {
  inputLabel?: string;
  leftIcon?: any;
  onLeftIconPress?: any;
  containerStyle?: CSSProperties;
  rightIcon?: any;
  onRightIconPress?: any;
  errorMessage?: string;
} & TextFieldProps;

export const CustomTextInput = (props: Props) => {
  const {
    inputLabel,
    leftIcon,
    rightIcon,
    onLeftIconPress,
    onRightIconPress,
    errorMessage,
    containerStyle,
  } = props;
  return (
    <div className={styles.container} style={containerStyle}>
      {inputLabel && <Typography>{inputLabel}</Typography>}
      <TextField
        {...props}
        variant={props.variant || "outlined"}
        className={styles.textInput}
        hiddenLabel
        sx={{
          "& fieldset": { border: errorMessage ? "2px solid red" : "none" },
          "&:focus-within fieldset": {
            border: "2px solid blue", // Add border when the TextField is focused
          },
          ...props.sx,
        }}
        InputProps={{
          startAdornment: (
            <>
              {leftIcon && (
                <IconButton onClick={onLeftIconPress}>{leftIcon}</IconButton>
              )}
            </>
          ),
          endAdornment: (
            <>
              {rightIcon && (
                <IconButton onClick={onRightIconPress}>{rightIcon}</IconButton>
              )}
            </>
          ),
        }}
      />
      {errorMessage && (
        <Typography color={"red"} fontSize={"12px"} marginTop={"3px"}>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};
