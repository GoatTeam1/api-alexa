import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
  todoId: { type: Number, unique: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' }
});

export default model('Todo', TodoSchema);
