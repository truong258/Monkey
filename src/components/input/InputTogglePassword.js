import React, { Fragment, useState } from "react";
import Input from "./Input";
import { IconEyeClose, IconEyeOpen } from "../icon";

const InputTogglePassword = ({ control }) => {
  const [togglePassword, setTooglePassword] = useState("");
  if (!control) return null;
  return (
    <Fragment>
      <Input
        id="password"
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        control={control}
      >
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTooglePassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setTooglePassword(false)}></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

export default InputTogglePassword;
