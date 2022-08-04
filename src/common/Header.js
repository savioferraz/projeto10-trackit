import React from "react";
import styled from "styled-components";

export default function Header() {
  return <Top></Top>;
}

const Top = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  margin-bottom: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
