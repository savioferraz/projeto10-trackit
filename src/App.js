import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./Habits";
import CreateAccount from "./CreateAccount";
import History from "./History";
import LoginScreen from "./LoginScreen";
import GlobalStyle from "./styles/GlobalStyles";
import Today from "./Today";
import UserContext from "./common/UserContext";

export default function App() {
  const [enableTaskBox, setEnableTaskBox] = useState(false);
  const [selected, setSelected] = useState(false);
  const [habits, setHabits] = useState([]);

  return (
    <UserContext.Provider
      value={{
        enableTaskBox,
        setEnableTaskBox,
        selected,
        setSelected,
        habits,
        setHabits,
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<CreateAccount />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
