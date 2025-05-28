// models/counter.js
import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  _id: String,
  sequence_value: Number,
});

export default mongoose.model('Counter', counterSchema);
