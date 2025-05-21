import { Router } from 'express';
const router = Router();
import { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo } from './controller.todo.js';

router.get('/', getAllTodos);
router.post('/', createTodo);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
