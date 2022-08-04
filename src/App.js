import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Behavior from "./Behavior";
import CreateAccount from "./CreateAccount";
import History from "./History";
import LoginScreen from "./LoginScreen";
import GlobalStyle from "./Styles/GlobalStyles";
import Today from "./Today";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<CreateAccount />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Behavior />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
