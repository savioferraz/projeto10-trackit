import React, { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./UserContext";

export default function BottomMenu() {
  const { percentage } = useContext(UserContext);

  return (
    <Bottom>
      <Link to="/habitos">
        <h1>Hábitos</h1>
      </Link>
      <Link to="/hoje">
        <div>
          <CircularProgressbar
            value={percentage}
            text="Hoje"
            background
            backgroundPadding={3}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "18px",
              pathTransitionDuration: 0.5,
              pathColor: "#ffffff",
              textColor: "#ffffff",
              backgroundColor: "#52B6FF",
            })}
          />
        </div>
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
  div {
    width: 91px;
    height: 91px;
  }
`;
