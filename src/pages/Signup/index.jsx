import "./styles.css";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useSignup, useLoggedInUser } from "../../hooks/auth.hook";

const SignupPage = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutateAsync: signupAsync } = useSignup();
  const { data: loggedInUser } = useLoggedInUser();

  useEffect(() => {
    if (loggedInUser) navigate("/dashboard");
  }, [loggedInUser, navigate]);

  const isConfirmPasswordMatch = useMemo(
    () => password === confirmPassword || confirmPassword === "",
    [confirmPassword, password]
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log(e);
    if (!isConfirmPasswordMatch) return;
    await signupAsync({ firstname, lastname, email, password });
  };

  return (
    <div className="sign-up-container">
      <div>
        <Typography variant="h3">Signup</Typography>
        <Box component="form" autoComplete="off" onSubmit={handleFormSubmit}>
          <div className="form-row">
            <TextField
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              label="First Name"
              variant="outlined"
              required
            />
            <TextField
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              label="Last Name"
              variant="outlined"
            />
          </div>
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
            <TextField
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!isConfirmPasswordMatch}
              helperText={
                !isConfirmPasswordMatch ? "Password do not match" : undefined
              }
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div className="form-row">
            <Button
              variant="contained"
              type="submit"
              disabled={!isConfirmPasswordMatch}
            >
              Create Account
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SignupPage;
