import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomMenu from "./common/BottomMenu";
import Header from "./common/Header";
import { getHabits } from "./Services";

export default function Today() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("trackit"));
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
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
      hoje
      <BottomMenu />
    </>
  );
}
