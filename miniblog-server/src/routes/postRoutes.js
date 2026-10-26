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
    const result = insertTodo.run(req.userId, content)

    res.json({ id: result.lastId, content})
 })

// Edit a post
router.put('/:id', (req, res) => { 
    const { content } = req.body
    const { id } = req.params

    const updatedPost = db.prepare(`UPDATE blog_post SET content = ? WHERE id = ?`)
    updatedPost.run(content, id)

    res.json({ message: "post edited", content })
 })

// Delete a post
router.delete('/:id', (req, res) => { 
    const { id } = req.params
    const userId = req.userId
    const deletePost = db.prepare(`DELETE FROM blog_post where id = ? AND user_id = ?`)

    deletePost.run(id, userId)

    res.send({message: "Post deleted"})
 })

export default router;