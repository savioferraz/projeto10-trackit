import React, { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "./common/UserContext";

export default function Week({ day }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { selected, setSelected } = useContext(UserContext);
  const [active, setActive] = useState(false);

  function SelectDay({ day, index, daysArr, setDaysArr, active }) {
    const [selected, setSelected] = useState(false);

    function popDaysArr(value) {
      if (value) {
        setSelected(!selected);
        for (let i = 0; i < daysArr.length; i++) {
          if (daysArr[i] === index) {
            daysArr.splice(i, 1);
            console.log(daysArr);
          }
          if (!value) {
            setSelected(!selected);
            setDaysArr([...daysArr, index]);
            console.log(daysArr);
          }
        }
      }
    }

    return (
      <>
        {selected ? (
          <div
            className="selected"
            onClick={() => (active ? popDaysArr(selected) : <></>)}
          >
            {day}
          </div>
        ) : (
          <div onClick={() => (active ? popDaysArr(selected) : <></>)}>
            {day}
          </div>
        )}
      </>
    );
  }

  return (
    <Wrapper>
      {week.map((day, i) => (
        <SelectDay key={i} index={i} day={day} />
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
