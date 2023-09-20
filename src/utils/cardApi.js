import { baseUrl, headers } from "./constants";

const checkResponses = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponses);
};

export const getItems = () => {
  return request(`${baseUrl}/items`, {
    headers: headers,
  });
};

export const addItem = ({ name, link, weather }) => {
  return request(`${baseUrl}/items`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      name,
      link,
      weather,
    }),
  });
};

export const deleteItem = (id) => {
  return request(`${baseUrl}/cards/${id}`, {
    headers: headers,
    method: "DELETE",
  });
};
