import express from 'express';
import { deleteEmploye, employeController , getAllEmployes, updateById} from '../Controller/employeController.js';
const router = express.Router();

router.post('/addemployeinfo', employeController)
router.get('/getAllEmployes', getAllEmployes)
router.put("/update/:id",  updateById);
router.delete("/delete/:id",  deleteEmploye);


export default router;