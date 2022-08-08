import React from "react";
import styled from "styled-components";

export default function Button({
  children,
  width = "80%",
  height = "45px",
  onClick,
}) {
  return (
    <Wrapper height={height} width={width} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: #52b6ff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  font-size: 21px;
  line-height: 26px;
  border: none;
  text-align: center;
  color: #ffffff;
  margin: 3px auto;
`;
