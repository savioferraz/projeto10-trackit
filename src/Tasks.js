import React from "react";
import styled from "styled-components";
import BottomMenu from "./common/BottomMenu";
import Button from "./common/Button";
import Header from "./common/Header";
import { Main } from "./styles/Body";

export default function Tasks() {
  return (
    <>
      <Header />
      <Main>
        <Habits>
          <p>Meus hábitos</p> <Button>+</Button>{" "}
        </Habits>
        <h1>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h1>
      </Main>
      <BottomMenu />
    </>
  );
}

const Habits = styled.div`
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color: #126ba5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  padding: 28px 17px;
`;
