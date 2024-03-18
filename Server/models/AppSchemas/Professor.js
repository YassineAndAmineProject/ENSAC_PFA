const { Schema, model } = require("mongoose");
const profSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    socialAccounts: {
      type: [String],
      default: [],
    },
    worksFor: {
      type: [String], // linked to Academy
      default: [],
    },
    isResponsable: {
      type: Boolean,
      default: false,
    },
    reponsebleFor: {
      type: [String], // linked to Academy
      default: [],
    },
    trainingsList: {
      type: [String], // linked to Training
      default: [],
    },
  },
  { timestamps: true }
);
const model = model("Professor", profSchema);
module.exports = model;
