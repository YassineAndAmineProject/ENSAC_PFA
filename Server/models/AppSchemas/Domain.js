const { Schema, model } = require("mongoose");
const domainSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const model = model("Domain", domainSchema);
module.exports = model;
