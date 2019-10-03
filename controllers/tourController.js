const Tour = require('../models/tourModel');

const getAllTours = async (req, res) => {
  try {
    //build query
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    const query = Tour.find(queryObj);

    //execute query
    // const tours = await query;

    const tours = await Tour.find().exec();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err.message
    });
  }
};

const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).exec();
    // findById is a helper function of findOne({_id:req.params.id})

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err.message
    });
  }
};

const createTour = async (req, res) => {
  try {
    // const newTour = new Tour({})
    // newTour.save()

    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(201).json({
      status: 'fail',
      message: 'Invalid data set'
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    //run validator can check mongoose schema validation while updating record
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err.message
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour
};
