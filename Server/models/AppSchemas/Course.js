const { Schema, model } = require("");
const courseSchema = new Schema(
  {
    trainingId: {
      type: String, // linked to training..
      required: true,
    },
    QuizId: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    chapters: {
      type: [String],
    },
  },
  { timestamps: true }
);
model = model("Course", courseSchema);
module.exports = model;
