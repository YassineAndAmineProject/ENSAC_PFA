const { model, Schema } = require("mongoose");
const notificationSchema = new Schema(
  {
    notified: {
      type: String,
      required: true,
    },
    notifier: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const model = model("Notification", notificationSchema);
module.exports = model;