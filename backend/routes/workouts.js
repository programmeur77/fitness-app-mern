const express = require('express');
const Workout = require('../models/workout');
const {
  createWorkout,
  getAllWorkouts,
  getOneWorkout,
  deleteOneWorkout,
  updateOneWorkout,
} = require('../controllers/workout-controllers');

const router = express.Router();

router.get('/', getAllWorkouts);

router.get('/:id', getOneWorkout);

router.post('/', createWorkout);

router.delete('/:id', deleteOneWorkout);

router.patch('/:id', updateOneWorkout);

module.exports = router;
