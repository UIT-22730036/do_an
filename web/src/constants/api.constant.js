const apiBaseUrl = process.env.REACT_APP_API_URL || "";

export const getEndPoints = () => {
  return {
    students: {
      getStudents: `${apiBaseUrl}/students`,
      getStudentsByClass: `${apiBaseUrl}/students/by-class`,
      createStudent: `${apiBaseUrl}/students/create`,
    },
    class: {
      getClasses: `${apiBaseUrl}/class`,
      createClass: `${apiBaseUrl}/class/create`,
    },
    cards: {
      getCards: `${apiBaseUrl}/cards`,
      createCard: `${apiBaseUrl}/cards/create`,
    },
  };
};
