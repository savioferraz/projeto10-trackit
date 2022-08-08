import React from "react";
import styled from "styled-components";

export default function Week({ week, setWeek = function () {} }) {
  function selecionar(dayId) {
    const newWeek = week.map((day) => {
      if (dayId === day.id) {
        return {
          ...day,
          selected: !day.selected,
        };
      }
      return day;
    });
    setWeek(newWeek);
  }

  function SelectDay({ value }) {
    return (
      <>
        <div
          className={`${value.selected ? "selected" : ""}`}
          onClick={() => selecionar(value.id)}
        >
          {value.day}
        </div>
      </>
    );
  }

  return (
    <Wrapper>
      {week.map((value, i) => (
        <SelectDay key={i} index={i} value={value} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px 12px;
  div {
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #dbdbdb;
    font-size: 20px;
    text-align: center;
    margin: 2px;
    cursor: pointer;
  }
  div.selected {
    color: #ffffff;
    background-color: #cfcfcf;
  }
`;
