import { baseUrl, headers } from "./constants";

export const register = ({ name, avatar, email, password }) => {
  console.log(name, email, password, avatar);
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      if (data.error) {
        Promise.reject(`Error: ${data.error}`);
      }
    })
    .catch((err) => console.error(err.message));
};

export const authorize = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else Promise.reject(`Error ${res.status}`);
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);

        return data;
      } else {
        return;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else Promise.reject(`Error: ${res.status}`);
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const editUser = ({ name, avatar, token }) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else Promise.reject(`Error: ${res.status}`);
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
