const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carrerModelSchema = new Schema({
    carrerTitle: { Type: String/*, required: true*/ },
    carrerDescription: { Type: String/*, required: true*/ },
    carrerImage: { Type: String/*, required: true*/ },
    carrerVideo: { Type: String }
  });
  
  // Export function to create "carrerModel" model class
  module.exports = mongoose.model("carrerModel", carrerModelSchema);