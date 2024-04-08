const { Schema, model } = require("mongoose");
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
      required: true,
    },
  },
  { timestamps: true }
);
const chapterModel = model("Chapter", chapterSchema);
<<<<<<< HEAD
module.exports = chapterModel;
=======
module.exports = chapterModel;
>>>>>>> 8f6f5bfe70aa175b33c8d7b3dcc6dc8fcfcfcb30
