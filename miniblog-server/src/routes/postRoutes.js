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
//  I used content instead of task since im making post instead of todo
// But some values are still named after todos
router.post('/', (req, res) => { 
    const { content } = req.body
    const insertTodo = db.prepare(`INSERT INTO blog_post (user_id, content) VALUES (?, ?)`)
    insertTodo.run(req.userId, content)

    res.json({ id: insertTodo.lastId, content})
 })

// Edit a post
router.put('/:id', (req, res) => { })

// Delete a post
router.delete('/:id', (req, res) => { })

export default router;