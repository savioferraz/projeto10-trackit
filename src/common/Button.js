import React from "react";
import styled from "styled-components";

export default function Button() {
  return <Botao></Botao>;
}

const Botao = styled.div`
  background-color: #52b6ff;
  width: 80%;
  height: 45px;
  border-radius: 5px;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  text-decoration: #ffffff;
  margin: 3px auto;
`;
