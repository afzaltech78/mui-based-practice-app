/** @format */
"use client";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const TestComponents = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState({ email: "" });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    setInput((prev) => ({
      ...prev,
      email: "done",
    }));
  };

  return (
    <>
      {/* ---------------->>> Typography <<<----------------*/}
      <Typography variant="h5" fontWeight={600} sx={{ color: "red" }}>
        Hello world
      </Typography>

      {/* ---------------->>> Button <<<----------------*/}
      <div className="mt-4">
        <Button
          size="large"
          variant="contained"
          color="error"
          onClick={() => alert("hello")}
          className="ms-4">
          Click me first
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="success"
          className="ms-4">
          Click me second
        </Button>
        <Button size="small" variant="text" color="info" className="ms-4">
          Click me thired
        </Button>
      </div>

      {/* ---------------->>> Textfiled <<<----------------*/}
      <div className="mt-6">
        <TextField
          variant="filled"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          placeholder="Email"
          type="email"
          className="ms-4"
        />
        <TextField
          variant="standard"
          placeholder="Password"
          type="password"
          className="ms-4"
        />
      </div>

      {/* ---------------->>> Textfiled Form <<<----------------*/}
      <div className="mt-6">
        <form onSubmit={handelSubmit}>
          <TextField
            name="email"
            onChange={handleChange}
            variant="outlined"
            placeholder="Email"
            type="email"
            className="ms-4"
            required
          />
          <Typography>{input.email}</Typography>
          <Button type="submit">Submit now</Button>
        </form>
      </div>
    </>
  );
};
