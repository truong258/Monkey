import React, { useEffect } from "react";
import { useAuth } from "../contexts/aut-context";
import { useNavigate } from "react-router-dom";
import AuhenticationPage from "./AuhenticationPage";
import { useForm } from "react-hook-form";
import Field from "../components/field/Field";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
  });

  const handleSignIn = (values) => {};
  //   const { userInfo } = useAuth();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!userInfo.email) navigate("/sign-up");
  //     else navigate("/");
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  return (
    <AuhenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email"> Email Address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email Address"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password"> Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            control={control}
          ></Input>
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
          Sign In
        </Button>
      </form>
    </AuhenticationPage>
  );
};

export default SignInPage;
