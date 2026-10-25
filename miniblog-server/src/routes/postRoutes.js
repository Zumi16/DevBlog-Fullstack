import express from 'express'
import db from '../db.js'

const router = express.Router();

// Get all posts of logged user
router.get('/', (req, res) => { 
    const getPosts = db.prepare('SELECT * FROM blog_post where user_id = ?')
    const posts = getPosts.all(req.userId) 
    res.json(posts)
 })

// Create a new post
router.post('/', (req, res) => { 
    const { task } = req.body
    const insertTodo = db.prepare(`INSERT INTO blog_posts (user_id, content) VALUES (?, ?)`)
    insertTodo.run(req.userId, task)

    res.json({ id: insertTodo.lastId, task})
 })

// Edit a post
router.put('/:id', (req, res) => { })

// Delete a post
router.delete('/:id', (req, res) => { })

export default router;