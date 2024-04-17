const carrerModel = require('../models/carrermodel');

const asyncHandler = require("express-async-handler");


exports.createCarrerModel = asyncHandler(async(req, res)=>{
    const carrer = await carrerModel.create(req.body);
    res.json(carrer)
});


exports.getCarrerModel = asyncHandler(async(req, res)=>{
    const carrers = await carrerModel.find();
    res.json(carrers)
});


exports.getCarrerModelById = asyncHandler(async(req, res)=>{
    const carrer = await carrerModel.findById(req.params.id);
    res.json(carrer)
});

