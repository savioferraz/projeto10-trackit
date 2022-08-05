import React from "react";
import styled from "styled-components";
import BottomMenu from "./common/BottomMenu";
import Button from "./common/Button";
import Header from "./common/Header";
import Input from "./common/Input";
import { Main } from "./styles/Body";

export default function Habits() {
  return (
    <>
      <Header />
      <Main>
        <MyHabits>
          <p>Meus hábitos</p> <Button>+</Button>{" "}
        </MyHabits>
        <TaskBox>
          <Input placeholder={"nome do hábito"}></Input>
          <ul>
            <li>D</li>
            <li>S</li>
            <li>T</li>
            <li>Q</li>
            <li>Q</li>
            <li>S</li>
            <li>S</li>
          </ul>
          <div>
            <h1>Cancelar</h1>
            <Button></Button>
          </div>
        </TaskBox>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Main>
      <BottomMenu />
    </>
  );
}

const MyHabits = styled.div`
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

const TaskBox = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 90vw;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
  ul {
    display: flex;
    flex-direction: row;
    margin: 6px 12px;
  }
  li {
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #dbdbdb;
    font-size: 20px;
    text-align: center;
    margin: 2px;
  }
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    color: #52b6ff;
  }
`;
