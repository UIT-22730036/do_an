const apiBaseUrl = process.env.REACT_APP_API_URL || "";

export const getEndPoints = () => {
  return {
    students: {
      getStudents: `${apiBaseUrl}/students`,
      createStudent: `${apiBaseUrl}/students/create`,
    },
  };
};
