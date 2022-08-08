import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import Input from "./common/Input";
import UserContext from "./common/UserContext";
import { postHabit } from "./Services";
import Week from "./Week";

export default function TaskBox() {
  const [name, setName] = useState("");
  const [daysArr, setdaysArr] = useState([]);
  const { enableTaskBox, setEnableTaskBox, selected, setSelected } =
    useContext(UserContext);
  const data = { name, daysArr };

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
        <Week />
        <div>
          <Cancel onClick={() => setEnableTaskBox(!enableTaskBox)}>
            Cancelar
          </Cancel>
          <Button height="35px" width="84px" type="submit">
            Salvar
          </Button>
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
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Cancel = styled.div`
  color: #52b6ff;
  margin: auto 23px;
`;
