import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
  id: { type: Number, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' }
});

export default model('Todo', TodoSchema);
