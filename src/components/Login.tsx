import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import "./Login.css";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { statusonlogin } from "../onLoginSlice";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const validateForm = async () => {
    const response = await fetch("http://localhost:3000/credentials");
    const data = await response.json();

    if (email.includes("@") && password.length > 7) {
      data.map((val: { username: string; password: string }) => {
        if (val.username === email) {
          if (val.password === password) {
            dispatch(statusonlogin());
            navigate("/dashboard");
          }
        }
      });
    } else if (password.length <= 7 && !email.includes("@")) {
      alert("Invalid email and password.Try Again!");
      setEmail("");
      setPassword("");
    } else if (password.length <= 7) {
      alert("Invalid password.Try Again!");
      setEmail("");
      setPassword("");
    } else {
      alert("Invalid email.Try Again!");
      setEmail("");
      setPassword("");
    }
  };

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  return (
    <Container>
      <div className="Login">
        <Form
          data-testid="login-form"
          className="text-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <h3> Sign In </h3>
          </div>

          <div className="mb-4">
            <Form.Group>
              <Form.Label>Email</Form.Label>

              <Form.Control
                className="inputField"
                autoFocus
                data-testid="text-input-element"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="mb-4">
            <Form.Group>
              <Form.Label>Password</Form.Label>

              <Form.Control
                className="inputField"
                data-testid="password-input-element"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </div>

          <Button
            data-testid="login-button-element"
            type="submit"
            onClick={() => validateForm()}
          >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
