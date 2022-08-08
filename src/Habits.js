import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BottomMenu from "./common/BottomMenu";
import Button from "./common/Button";
import Header from "./common/Header";
import { getHabits } from "./Services";
import { Main } from "./styles/Body";
import Task from "./Task";
import TaskBox from "./TaskBox";

export default function Habits() {
  const [enableTaskBox, setEnableTaskBox] = useState(false);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    getHabits().then((res) => {
      // console.log(res.data);
      setHabits(res.data);
    });
  }, []);
  console.log(habits);

  return (
    <>
      <Header />
      <Main>
        <MyHabits>
          <p>Meus hábitos</p>
          <Button onClick={() => setEnableTaskBox(true)}>+</Button>
        </MyHabits>
        {enableTaskBox ? (
          <TaskBox
            enableTaskBox={enableTaskBox}
            setEnableTaskBox={setEnableTaskBox}
          />
        ) : (
          <></>
        )}
        {habits.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          habits.map((habit) => <Task key={habit.id} name={habit.name}></Task>)
        )}
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
