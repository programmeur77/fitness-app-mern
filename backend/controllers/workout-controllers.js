/**
 * @file Contains functions that are going to get or store data in the DB
 * @author Benoît PUECH
 * 17/12/22
 */

const Workout = require('../models/workout');

const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({})
    .sort({ createdAt: -1 })
    .then((workouts) => res.status(200).json({ workouts, status: 200 }))
    .catch((error) =>
      res.status(404).json({ error: error.message, status: 404 })
    );
};

const getOneWorkout = async (req, res) => {
  const workout = await Workout.findOne({ _id: req.params.id })
    .then((workout) => res.status(200).json({ workout, status: 200 }))
    .catch((error) =>
      res.status(400).json({ error: error.message, status: 400 })
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

module.exports = { getAllWorkouts, getOneWorkout, createWorkout };
