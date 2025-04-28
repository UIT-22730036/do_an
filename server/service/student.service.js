const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

const getStudents = async () => {
  try {
    const res = await prisma.sinhVien.findMany();
    return res;
  } catch (error) {
    return error;
  }
};

const createStudent = async (tenSV, email, lop) => {
  try {
    const newStudent = await prisma.sinhVien.create({
      data: { tenSV, email, lop },
    });

    return newStudent;
  } catch (error) {
    return error;
  }
};
const studentService = { getStudents, createStudent };

module.exports = studentService;
