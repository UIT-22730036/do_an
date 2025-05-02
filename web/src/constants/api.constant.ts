export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getEndpoint = (id?: number) => ({
  students: {
    getAll: `${API_URL}/students`,
    create: `${API_URL}/students/create`,
    update: `${API_URL}/students/update/${id}`,
    delete: `${API_URL}/students/delete/${id}`,
  },
  cards: {
    getAll: `${API_URL}/cards`,
    create: `${API_URL}/cards/create`,
    update: `${API_URL}/cards/update/${id}`,
    delete: `${API_URL}/cards/delete/${id}`,
  },
  class: {
    getAll: `${API_URL}/class`,
    create: `${API_URL}/class/create`,
    update: `${API_URL}/class/update/${id}`,
    delete: `${API_URL}/class/delete/${id}`,
  },
  positions: {
    getAll: `${API_URL}/positions`,
  },
  logs: {
    getAll: `${API_URL}/logs`,
  },
  props: {
    getAll: `${API_URL}/property`,
  },
});
