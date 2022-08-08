import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BottomMenu from "./common/BottomMenu";
import Button from "./common/Button";
import Header from "./common/Header";
import UserContext from "./common/UserContext";
import { deleteHabit, getHabits } from "./Services";
import { Main } from "./styles/Body";
import { Task } from "./Task";
import TaskBox from "./TaskBox";

export default function Habits() {
  const { habits, setHabits, enableTaskBox, setEnableTaskBox } =
    useContext(UserContext);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getHabits().then((res) => {
      setHabits(res.data);
    });
  }, [refresh]);

  function deleteHab(habitId) {
    const confirm = window.confirm("Excluir hábito?");
    if (confirm) {
      deleteHabit(habitId).then(() => {
        setRefresh(!refresh);
      });
    }
  }
  console.log(habits);

  return (
    <>
      <Header />
      <Main>
        <MyHabits>
          <p>Meus hábitos</p>
          <Button
            width="40px"
            height="35px"
            onClick={() => setEnableTaskBox(true)}
          >
            +
          </Button>
        </MyHabits>
        {enableTaskBox ? (
          <TaskBox
            enableTaskBox={enableTaskBox}
            setEnableTaskBox={setEnableTaskBox}
            refresh={refresh}
            setRefresh={setRefresh}
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
          habits.map((habit) => (
            <Task
              key={habit.id}
              name={habit.name}
              id={habit.id}
              deleteHab={deleteHab}
              days={habit.days}
            ></Task>
          ))
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
  justify-content: space-between;
  width: 100vw;
  padding: 28px 17px;
`;
