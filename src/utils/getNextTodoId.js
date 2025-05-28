import Counter from '../models/counter.js';

export async function getNextTodoId() {
  const counter = await Counter.findByIdAndUpdate(
    { _id: 'todoId' },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );
  return counter.sequence_value;
}
