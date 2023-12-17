const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all workouts' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get one Workout' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Post a new Workout' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a Workout' });
});

router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a Workout' });
});

module.exports = router;
