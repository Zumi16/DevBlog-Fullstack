import express from 'express'
import db from '../db.js'

const router = express.Router();

// Get all posts of logged user
router.get('/', (req, res) => { })

// Create a new post
router.post('/', (req, res) => { })

// Edit a post
router.put('/:id', (req, res) => { })

// Delete a post
router.delete('/:id', (req, res) => { })

export default router;