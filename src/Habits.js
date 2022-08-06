import React, { useState } from "react";
import styled from "styled-components";
import BottomMenu from "./common/BottomMenu";
import Button from "./common/Button";
import Header from "./common/Header";
import Input from "./common/Input";
import { Main } from "./styles/Body";
import TaskBox from "./TaskBox";

export default function Habits() {
  const [enableTask, setEnableTask] = useState(false);

  return (
    <>
      <Header />
      <Main>
        <MyHabits>
          <p>Meus hábitos</p>
          <Button onClick={() => (setEnableTask = true)}>+</Button>
        </MyHabits>
        {enableTask ? <TaskBox /> : <></>}
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
