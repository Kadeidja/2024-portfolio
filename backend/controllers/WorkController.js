const workModel = require('../models/workmodel');

const asyncHandler = require("express-async-handler");


exports.createworkModel = asyncHandler(async(req, res)=>{
    const work = await workModel.create(req.body);
    res.json(work)
});


exports.getworkModel = asyncHandler(async(req, res)=>{
    const works = await workModel.find();
    res.json(works)
});


exports.getworkModelById = asyncHandler(async(req, res)=>{
    const work = await workModel.findById(req.params.id);
    res.json(work)
});

