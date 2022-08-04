import React from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import Input from "./common/Input";
import { Login } from "./styles/Body";

export default function LoginScreen() {
  return (
    <Login>
      <Input placeholder={"email"} type={"email"}></Input>
      <Input placeholder={"senha"} type={"password"}></Input>
      <Button>Entrar</Button>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Login>
  );
}
