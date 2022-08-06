import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./common/Button";
import { Login } from "./styles/Body";
import { postCreateAcc } from "./Services";
import Input from "./common/Input";
import logo from "./common/images/logo.png";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const data = { email, name, image, password };

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    postCreateAcc(data).then(() => navigate("/"));
  }

  return (
    <Login>
      <img src={logo} alt="logo" />
      <form onSubmit={handleForm}>
        <Input
          placeholder={"email"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder={"senha"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder={"nome"}
          type={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder={"foto"}
          type={"url"}
          name={"image"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Login>
  );
}
