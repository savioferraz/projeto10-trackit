import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import Input from "./common/Input";
import { Login } from "./styles/Body";
import { postCreateAcc } from "./Services";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const data = { email, password, name, photo };

  function submit() {
    postCreateAcc(data);
  }

  return (
    <Login>
      <form onSubmit={submit}>
        <Input
          placeholder={"email"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder={"senha"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          placeholder={"nome"}
          type={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder={"foto"}
          type={"url"}
          name={"photo"}
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        ></Input>
        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Login>
  );
}
