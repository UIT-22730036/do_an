const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

const getClasses = async () => {
  try {
    const res = await prisma.lop.findMany();
    return res;
  } catch (error) {
    console.error("Error fetching classes:", error.message);
    throw error;
  }
};

const getClassByName = async (tenLop) => {
  try {
    const res = await prisma.lop.findUnique({
      where: { tenLop },
    });
    return res;
  } catch (error) {
    console.error("Error fetching class by name:", error.message);
    throw error;
  }
};

const createClass = async (tenLop) => {
  try {
    const newClass = await prisma.lop.create({
      data: { tenLop },
    });
    return newClass;
  } catch (error) {
    console.error("Error creating class:", error.message);
    throw error;
  }
};

const updateClass = async (data) => {
  try {
    const updatedClass = await prisma.lop.update({
      where: { maLop: data.maLop },
      data: { ...data },
    });
    return updatedClass;
  } catch (error) {
    console.error("Error updating class:", error.message);
    throw error;
  }
};

const classService = { getClasses, createClass, getClassByName, updateClass };
module.exports = classService;
