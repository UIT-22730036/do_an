const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

const getStudents = async () => {
  try {
    const res = await prisma.sinhVien.findMany({
      include: {
        lop: {
          select: {
            tenLop: true,
          },
        },
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

const createStudent = async (tenSV, email, maLop) => {
  try {
    const newStudent = await prisma.sinhVien.create({
      data: { tenSV, email, lop: { connect: { maLop } } },
    });

    return newStudent;
  } catch (error) {
    console.error("Error creating student:", error.message);
    throw error;
  }
};
const studentService = { getStudents, createStudent };

module.exports = studentService;
