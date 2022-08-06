import React from "react";
import styled from "styled-components";
import Button from "./common/Button";
import Input from "./common/Input";

export default function TaskBox() {
  return (
    <Wrapper>
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
