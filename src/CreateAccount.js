import React from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import Input from "./common/Input";
import { Login } from "./styles/Body";

export default function CreateAccount() {
  return (
    <Login>
      <Input placeholder={"email"} type={"email"}></Input>
      <Input placeholder={"senha"} type={"password"}></Input>
      <Input placeholder={"nome"} type={"text"}></Input>
      <Input placeholder={"foto"} type={"url"}></Input>
      <Button>Cadastrar</Button>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Login>
  );
}
