const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workModelSchema = new Schema({
    workTitle: { Type: String/*, required: true*/ },
    workImage: { Type: String/*, required: true*/ },
    workDescription: { Type: String/*, required: true*/ },
    workLink: { Type: String },
    workVideos: { Type: String },
    workDate: { Type: Date, default: Date }
    });
  
  // Export function to create "SomeModel" model class
  module.exports = mongoose.model("workModel", workModelSchema);
