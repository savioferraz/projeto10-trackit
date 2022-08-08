import React from "react";
import styled from "styled-components";
import logo_small from "./images/logo_small.png";

export default function Header() {
  const auth = JSON.parse(localStorage.getItem("trackit"));

  return (
    <Top>
      <img src={logo_small} alt="logo" />
      <Img src={auth.image} className="profile" alt="profile" />
    </Top>
  );
}

const Top = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 18px;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 51px;
  width: 51px;
`;
