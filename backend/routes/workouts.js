const express = require('express');
const Workout = require('../models/workout');
const {
  createWorkout,
  getAllWorkouts,
  getOneWorkout,
} = require('../controllers/workout-controllers');

const router = express.Router();

router.get('/', getAllWorkouts);

router.get('/:id', getOneWorkout);

router.post('/', createWorkout);

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a Workout' });
});

router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a Workout' });
});

module.exports = router;
