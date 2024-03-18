const { Schema, model } = require("");
const chapterSchema = new Schema(
  {
    courseId: {
      type: String, // linked to course..
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    video: {
      type: String,
    },
    images: {
      type: [String],
    },
  },
  { timestamps: true }
);
model = model("Chapter", chapterSchema);
module.exports = model;
