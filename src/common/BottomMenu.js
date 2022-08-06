import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BottomMenu() {
  return (
    <Bottom>
      <Link to="/habitos">
        <h1>Hábitos</h1>
      </Link>
      <Link to="/hoje">
        <h1>Hoje</h1>
      </Link>
      <Link to="/historico">
        <h1>Histórico</h1>
      </Link>
    </Bottom>
  );
}

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  margin-top: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
