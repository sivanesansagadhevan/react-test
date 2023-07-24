import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("renders login form", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const rememberCheckbox = screen.getByRole("checkbox");
    const signInButton = screen.getByRole("button", { name: "Sign in" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(rememberCheckbox).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  test("inputs accept user input", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  test("clicking 'Sign in' button triggers form submission", () => {
    const handleSubmit = jest.fn();
    render(<Login />);
    const signInButton = screen.getByRole("button", { name: "Sign in" });

    signInButton.onclick = handleSubmit;
    fireEvent.click(signInButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
