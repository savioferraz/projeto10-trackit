import React from "react";
import styled from "styled-components";

export default function Input({ children, placeholder }) {
  return <Wrapper placeholder={placeholder}>{children}</Wrapper>;
}

const Wrapper = styled.input`
  height: 45px;
  width: 80%;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;
