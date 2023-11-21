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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import AuhenticationPage from "./AuhenticationPage";

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
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const [togglePassword, setTooglePassword] = useState(false);
  console.log("cong", 0.1 + 0.2);

  const handleSignUp = async (values) => {
    if (!isValid) return null;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "user");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully!");
    navigate("/");
  };

  return (
    <AuhenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
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
          />
        </Field>
        <Field>
          <Label htmlFor="email" className="label">
            Email
          </Label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password" className="label">
            Password
          </Label>
          <Input
            id="password"
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose
                onClick={() => setTooglePassword(true)}
              ></IconEyeClose>
            ) : (
              <IconEyeOpen
                onClick={() => setTooglePassword(false)}
              ></IconEyeOpen>
            )}
          </Input>
        </Field>

        <Button
          type="submit"
          style={{
            maxWidth: 300,
            margin: "0 auto",
          }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </AuhenticationPage>
  );
};

export default SignUpPage;
