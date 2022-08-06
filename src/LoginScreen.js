import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./common/Button";
import Input from "./common/Input";
import { postLogin } from "./Services";
import { Login } from "./styles/Body";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email, password };

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    postLogin(data).then((res) => {
      const token = res.data.token;
      const image = res.data.image;
      const authJSON = JSON.stringify({ token: token, image: image });
      localStorage.setItem("trackit", authJSON);
      navigate("/hoje");
    });
  }

  return (
    <Login>
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
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Login>
  );
}
