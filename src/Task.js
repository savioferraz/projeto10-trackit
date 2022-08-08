import styled from "styled-components";
import Week from "./Week";

export function Task({ name, id, deleteHab, days }) {
  const week = [
    { id: 0, day: "D", selected: false },
    { id: 1, day: "S", selected: false },
    { id: 2, day: "T", selected: false },
    { id: 3, day: "Q", selected: false },
    { id: 4, day: "Q", selected: false },
    { id: 5, day: "S", selected: false },
    { id: 6, day: "S", selected: false },
  ];

  const weekMap = week.map((day) => {
    if (days.includes(day.id)) {
      return {
        ...day,
        selected: true,
      };
    } else {
      return day;
    }
  });

  return (
    <Wrapper>
      <div>
        <h1>{name}</h1>
        <span onClick={() => deleteHab(id)}>
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </div>
      <Week week={weekMap} />
    </Wrapper>
  );
}

export function TaskToday({ name }) {
  return (
    <Wrapper>
      <div>
        <h1>{name}</h1>
      </div>
      <h2>Sequência atual:</h2>
      <h2>Seu recorde: </h2>
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
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
  h2 {
    font-size: 13px;
    color: #666666;
  }
`;
