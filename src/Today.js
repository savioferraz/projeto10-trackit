import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomMenu from "./common/BottomMenu";
import Header from "./common/Header";
import { getHabits } from "./Services";
import { Main } from "./styles/Body";

export default function Today() {
  const navigate = useNavigate();
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    getHabits().then((res) => {
      setHabits(res.data);
    });
    getHabits().catch((err) => {
      navigate("/");
    });
  });

  return (
    <>
      <Header />
      <Main>{habits}</Main>
      <BottomMenu />
    </>
  );
}
