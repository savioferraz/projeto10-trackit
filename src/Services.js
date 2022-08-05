import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

function postCreateAcc(body) {
  const promise = axios.post(`${url}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${url}/auth/login`, body);
  return promise;
}

function postHabit(body) {
  const config = createHeaders();
  const promise = axios.post(`${url}/habits`, body, config);
  return promise;
}

function getHabits() {
  const config = createHeaders();
  const promise = axios.get(`${url}/habits`, config);
  return promise;
}

function deleteHabit(habitId) {
  const config = createHeaders();
  const promise = axios.delete(`${url}/habits/${habitId}`, config);
  return promise;
}

function getHabitsToday() {
  const config = createHeaders();
  const promise = axios.get(`${url}/habits/today`, config);
  return promise;
}

function postHabitsCheck(habitId) {
  const config = createHeaders();
  const body = {};
  const promise = axios.post(`${url}/habits/${habitId}/check`, body, config);
  return promise;
}

function postHabitsUncheck(habitId) {
  const config = createHeaders();
  const body = {};
  const promise = axios.post(`${url}/habits/${habitId}/uncheck`, body, config);
  return promise;
}

function getHistory() {
  const config = createHeaders();
  const promise = axios.get(`${url}/habits/history/daily`, config);
  return promise;
}

export {
  postCreateAcc,
  postLogin,
  postHabit,
  getHabits,
  deleteHabit,
  getHabitsToday,
  postHabitsCheck,
  postHabitsUncheck,
  getHistory,
};
