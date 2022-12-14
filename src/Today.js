import React, { useContext, useEffect } from "react";
import BottomMenu from "./common/BottomMenu";
import Header from "./common/Header";
import UserContext from "./common/UserContext";
import { getHabitsToday } from "./Services";
import { Main } from "./styles/Body";
import { TaskToday } from "./Task";

export default function Today() {
  const { habits, setHabits } = useContext(UserContext);

  useEffect(() => {
    getHabitsToday().then((res) => {
      setHabits(res.data);
    });
  }, []);
  console.log(habits);

  return (
    <>
      <Header />
      <Main>
        <p>Hoje</p>
        {habits.map((habit) => (
          <TaskToday key={habit.id} name={habit.name} id={habit.id}></TaskToday>
        ))}
      </Main>
      <BottomMenu />
    </>
  );
}
