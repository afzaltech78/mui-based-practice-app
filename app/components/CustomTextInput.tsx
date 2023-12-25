/** @format */

import {
  IconButton,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import styles from "../assets/css/components/CustomTextInput.module.css";
type Props = {
  inputLabel?: string;
  leftIcon?: any;
  onLeftIconPress?: any;
  rightIcon?: any;
  onRightIconPress?: any;
} & TextFieldProps;

export const CustomTextInput = (props: Props) => {
  const { inputLabel, leftIcon, rightIcon, onLeftIconPress, onRightIconPress } =
    props;
  return (
    <div className={styles.container}>
      <Typography>{inputLabel}</Typography>
      <TextField
        {...props}
        variant={props.variant || "outlined"}
        className={styles.textInput}
        hiddenLabel
        sx={{
          "& fieldset": { border: "none" },
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
    </div>
  );
};
