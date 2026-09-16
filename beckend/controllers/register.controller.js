import Student from "../models/Student.js";

export const registerStudent = async (req, res) => {
  try {
    const { name, email, phone, courseName } = req.body;

    
    if (!name || !email || !phone || !courseName) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    
    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        message: "Student with this email already exists",
      });
    }

    
    const newStudent = new Student({
      name,
      email,
      phone,
      courseName,
    });

    // 4. save to database
    await newStudent.save();

    res.status(201).json({
      message: "რეგისტრაცია წარმატებით დასრულდა",
      student: newStudent,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
};