const BASE_URL = `http://localhost:3000`;

export const endpoints = {
  users: {
    getAll: {
      url: `${BASE_URL}/users`,
      method: "GET",
    },

    getOne: {
      url: ([userId]) => `${BASE_URL}/users/${userId}`,
      method: "GET",
    },

    create: {
      url: `${BASE_URL}/users`,
      method: "POST",
    },

    update: {
      url: ([userId]) => `${BASE_URL}/users/${userId}`,
      method: "PUT",
    },
  },
};
