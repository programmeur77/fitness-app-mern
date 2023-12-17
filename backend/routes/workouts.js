const express = require('express');
const Workout = require('../models/workout');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all workouts' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get one Workout' });
});

router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a Workout' });
});

router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a Workout' });
});

module.exports = router;
