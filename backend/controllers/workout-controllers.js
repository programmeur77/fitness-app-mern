/**
 * @file Contains functions that check the data received and get it from or post it in DB
 * @author Benoît PUECH
 * 17/12/22
 */

const Workout = require('../models/workout');
const mongoose = require('mongoose');

const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({})
    .sort({ createdAt: -1 })
    .then((workouts) => res.status(200).json({ workouts, status: 200 }))
    .catch((error) =>
      res.status(404).json({ error: error.message, status: 404 })
    );
};

const getOneWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: 'Not a correct ID', status: 404 });
  }

  const workout = await Workout.findOne({ _id: req.params.id })
    .then((workout) => res.status(200).json({ workout, status: 200 }))
    .catch((error) =>
      res.status(404).json({ error: error.message, status: 404 })
    );
};

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOneWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: 'Not a correct ID', status: 404 });
  }

  Workout.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { new: true }
  )
    .then((workout) =>
      res
        .status(200)
        .json({ workout, message: 'Successfully Updated', status: 200 })
    )
    .catch((error) =>
      res.status(400).json({ error: error.message, status: 400 })
    );
};

const deleteOneWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: 'Not a correct ID', status: 404 });
  }

  const workout = await Workout.deleteOne({ _id: req.params.id })
    .then(() =>
      res
        .status(200)
        .json({ message: 'Workout Successfully Deleted', status: 200 })
    )
    .catch((error) =>
      res.status(400).json({ error: error.message, status: 400 })
    );
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  deleteOneWorkout,
  updateOneWorkout,
};
