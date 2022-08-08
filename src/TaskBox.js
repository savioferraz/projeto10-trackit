import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import Input from "./common/Input";
import UserContext from "./common/UserContext";
import { postHabit } from "./Services";
import Week from "./Week";

export default function TaskBox({ refresh, setRefresh }) {
  const [name, setName] = useState("");
  const { enableTaskBox, setEnableTaskBox } = useContext(UserContext);
  const [week, setWeek] = useState([
    { id: "0", day: "D", selected: false },
    { id: "1", day: "S", selected: false },
    { id: "2", day: "T", selected: false },
    { id: "3", day: "Q", selected: false },
    { id: "4", day: "Q", selected: false },
    { id: "5", day: "S", selected: false },
    { id: "6", day: "S", selected: false },
  ]);

  function handleForm(e) {
    e.preventDefault();
    const days = week.filter((day) => day.selected).map((day) => day.id);
    const data = { name, days };
    console.log(data);
    postHabit(data).then(setRefresh(!refresh));
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
        <Week week={week} setWeek={setWeek} />
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
