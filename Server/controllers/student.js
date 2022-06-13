import student from "../Model/student.js";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message })

  }
}
export const createStudents = (req, res) => {
  const student = req.body;
  const newStudent = new student(student);
  try {
    newStudent.save();
    res.status(201).json(newStudent)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}