import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteHabit } from "./Services";
import Week from "./Week";

export default function Task({ name, id, deleteHab }) {
  return (
    <Wrapper>
      <div>
        <h1>{name}</h1>
        <span onClick={() => deleteHab(id)}>
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </div>
      <Week />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 90vw;
  height: 90px;
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 15px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
`;
