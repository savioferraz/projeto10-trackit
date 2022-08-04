import React from "react";
import Input from "./common/Input";

export default function LoginScreen() {
  return (
    <div>
      <Input placeholder={"email"}></Input>
      <Input placeholder={"senha"}></Input>
    </div>
  );
}
