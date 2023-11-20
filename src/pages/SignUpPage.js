import React, { useState } from "react";
import styled from "styled-components";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import Field from "../components/field/Field";
import Button from "../components/button/Button";

const schema = yup.object({
  fullname: yup.string().required("please enter your fullname"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("please enter your email"),
  password: yup
    .string()
    .required("please enter your password")
    .min(8, "your password must be at least 8 character or greater"),
});

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    display: block;
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .feild {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }

  /* .input {
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    border: none;
    font-weight: 500px;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};

    outline: none;
  } */
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const [togglePassword, setTooglePassword] = useState(false);

  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="./logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">My Blogging</h1>
        <form className="form">
          <Field>
            <Label htmlFor="fullname" className="label">
              FullName
            </Label>
            <Input
              id="fullname"
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            >
              <IconEyeClose className="input-icon"></IconEyeClose>
            </Input>
          </Field>

          <Button type="submit" disabled>
            Sign Up
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
