// controllers/todoController.js
import Todo from './model.todo.js';
import { getNextTodoId } from '../utils/getNextTodoId.js';

export async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function createTodo(req, res) {
  try {
    const { description, status } = req.body;
    const todoId = await getNextTodoId();
    const todo = new Todo({ todoId, description, status });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
}

export async function getTodoById(req, res) {
  try {
    const todo = await Todo.findOne({ todoId: parseInt(req.params.todoId) });
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
}

export async function updateTodo(req, res) {
  try {
    const { description, status } = req.body;
    const updatedTodo = await Todo.findOneAndUpdate(
      { todoId: parseInt(req.params.todoId) },
      { description, status },
      { new: true }
    );
    if (!updatedTodo) return res.status(404).json({ error: 'Todo not found' });
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data or ID' });
  }
}

export async function deleteTodo(req, res) {
  try {
    const deleted = await Todo.findOneAndDelete({ todoId: parseInt(req.params.todoId) });
    if (!deleted) return res.status(404).json({ error: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
}
