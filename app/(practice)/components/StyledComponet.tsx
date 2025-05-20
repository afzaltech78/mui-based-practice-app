/** @format */
"use client";
import { Typography, styled } from "@mui/material";

const CustomizedTypography = styled(Typography)`
  color: #9c7200;
  :hover {
    color: #003000;
  }
`;
export const StyledComponet = () => {
  return <CustomizedTypography>hhhelo</CustomizedTypography>;
};
