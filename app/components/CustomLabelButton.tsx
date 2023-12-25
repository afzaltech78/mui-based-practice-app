/** @format */

import { Button, ButtonProps } from "@mui/material";

export const CustomLabelButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="text"
      sx={{
        color: "black",
        ...props.sx,
      }}
    />
  );
};
