import React from "react";
import BottomMenu from "./common/BottomMenu";
import Header from "./common/Header";
import { Main } from "./styles/Body";

export default function History() {
  return (
    <>
      <Header />
      <Main>
        <p>Histórico</p>
        <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
      </Main>
      <BottomMenu />
    </>
  );
}
