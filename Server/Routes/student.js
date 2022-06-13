import express from "express";
import student from "../Model/student.js";
import { getStudents, createStudents } from "../controllers/student.js";
const router = express.Router();
router.get('/', getStudents);
router.post('/', createStudents);
export default router;