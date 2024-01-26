import React, { useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import AuhenticationPage from "./AuhenticationPage";
import InputTogglePassword from "../components/input/InputTogglePassword";

const schema = yup.object({
  fullname: yup.string().required("please input your fullname"),
  email: yup
    .string()
    .required("please input your email")
    .email("please input a valid email"),
  password: yup.string().required("please input your pass word"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  useEffect(() => {
    const arrayErros = Object.values(errors);
    if (arrayErros.length > 0) {
      toast.error(arrayErros[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  const handleSign = async (values) => {
    if (!isValid) return null;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUsser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "user");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully");
    navigate("/");
  };

  useEffect(() => {
    document.tittle = "RegisterPage";
  }, []);

  return (
    <AuhenticationPage>
      {/* <form className="form" onSubmit={handleSubmit(handleSignUp)}> */}
      <form className="form" onSubmit={handleSubmit(handleSign)}>
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
