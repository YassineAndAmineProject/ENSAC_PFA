const { Schema, model, model } = require("mongoose");
const trainingSchema = new Schema({
  academyId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  subscribers: {
    type: [String], // linked to Student
  },
  Courses: {
    type: [String], // linked to Course
    required: true,
  },
}, { timestamps: true });
const model = model("Training",trainingSchema); 
module.exports = model; 
//Enrollement : a Schema to define...