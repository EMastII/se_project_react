const baseUrl = "http://localhost:3001";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getItems = (data) => {
  return fetch(`${baseUrl}/items`, {
    headers: { "Content-Type": "application/json" },
  }).then(handleServerResponse);
};

export const postNewCard = (newCardData) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCardData),
  }).then(handleServerResponse);
};

export const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
