import styled from "styled-components";

export default function Task({ name }) {
  return (
    <Wrapper>
      <h1>{name}</h1>
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
  ul {
    display: flex;
    flex-direction: row;
    margin: 6px 12px;
  }
  ul button {
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #dbdbdb;
    font-size: 20px;
    text-align: center;
    margin: 2px;
  }
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
`;
