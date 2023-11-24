import React, { useEffect } from "react";
import styled from "styled-components";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Field from "../components/field/Field";
import Button from "../components/button/Button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import AuhenticationPage from "./AuhenticationPage";
import InputTogglePassword from "../components/input/InputTogglePassword";

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

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

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
  useEffect(() => {
    document.title = "RegisterPage";
  }, []);

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
          <InputTogglePassword control={control}></InputTogglePassword>
        </Field>
        <div className="have-account">
          You already an account? <NavLink to={"/sign-in"}>Login</NavLink>
        </div>
        <Button
          type="submit"
          kind="primary"
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
