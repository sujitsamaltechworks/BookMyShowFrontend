import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

import "./styles.css";
import { useLoggedInUser, useSignIn } from "../../hooks/auth.hook";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutateAsync: signInAsync } = useSignIn();
  const { data: loggedInUser } = useLoggedInUser();

  useEffect(() => {
    if (loggedInUser) navigate("/dashboard");
  }, [loggedInUser, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signInAsync({ email, password });
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <Typography variant="h3">Sign In</Typography>
        <Box component="form" autoComplete="off" onSubmit={handleFormSubmit}>
          <div className="form-row">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div className="form-row">
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div className="form-row">
            <Button variant="contained" type="submit" fullWidth>
              Sign In
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SigninPage;
