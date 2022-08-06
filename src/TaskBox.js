import React, { useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import Input from "./common/Input";
import { postHabit } from "./Services";

export default function TaskBox() {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);

  const data = { name, days };

  // function enable(day) {
  //     const [enable, setEnable] = useState(false)
  //     {enable ? (setDays((days) => [...days, `${day}`]) : (setDays[...days.slice(`${day}`)])}
  // }

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    postHabit(data);
  }

  return (
    <Wrapper>
      <form onSubmit={handleForm}>
        <Input
          placeholder={"nome do hábito"}
          type={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <ul>
          <button onClick={() => setDays((days) => [...days, `0`])}>D</button>
          <button onClick={() => setDays((days) => [...days, `1`])}>S</button>
          <button onClick={() => setDays((days) => [...days, `2`])}>T</button>
          <button onClick={() => setDays((days) => [...days, `3`])}>Q</button>
          <button onClick={() => setDays((days) => [...days, `4`])}>Q</button>
          <button onClick={() => setDays((days) => [...days, `5`])}>S</button>
          <button onClick={() => setDays((days) => [...days, `6`])}>S</button>
        </ul>
        <div>
          <h1>Cancelar</h1>
          <Button type="submit"></Button>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  ul button {
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
