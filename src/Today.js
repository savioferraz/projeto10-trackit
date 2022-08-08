import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomMenu from "./common/BottomMenu";
import Header from "./common/Header";
import { getHabits } from "./Services";
import { Main } from "./styles/Body";
import Task from "./Task";

export default function Today() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Main>
        {/* {habits.map((habit) => (
          <Task key={habit.id} name={habit.name}></Task>
        ))} */}
      </Main>
      <BottomMenu />
    </>
  );
}
