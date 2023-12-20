/** @format */

"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [input, setInput] = useState({
    uname: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e?.target?.name]: e?.target?.value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", input);
    if (input.uname?.length == 0 && isSignUp) {
      alert("Please enter name");
    } else if (input.email?.length == 0) {
      alert("Please enter email");
    } else if (input.password?.length == 0) {
      alert("Please enter password");
    } else {
      if (isSignUp) alert("User Register success");
      else alert("User login success");
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
          borderRadius={3}
          padding={5}
          marginTop={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}>
          <Typography variant="h3" padding={3} textAlign={"center"}>
            {isSignUp ? "Register" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField
              variant="outlined"
              placeholder="Name"
              type="text"
              margin="normal"
              name="uname"
              value={input.uname}
              onChange={handelChange}
            />
          )}
          <TextField
            variant="outlined"
            placeholder="Email"
            type="email"
            margin="normal"
            name="email"
            value={input.email}
            onChange={handelChange}
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            type="password"
            margin="normal"
            name="password"
            value={input.password}
            onChange={handelChange}
          />
          <Button
            variant="contained"
            color="warning"
            type="submit"
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}>
            {isSignUp ? "Register" : "Login"}
          </Button>
          <Button
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}
            onClick={() => setIsSignUp(!isSignUp)}>
            CHANGE TO {isSignUp ? "Login" : "SIGN UP"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignIn;
