import { Router } from 'express';
const router = Router();
import { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo } from './controller.todo.js';

router.get('/', getAllTodos);
router.post('/', createTodo);
router.get('/:todoId', getTodoById);
router.put('/:todoId', updateTodo);
router.delete('/:todoId', deleteTodo);

export default router;
