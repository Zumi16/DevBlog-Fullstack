import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router();

//Register a new user endpoint at /auth/register
router.post('/register', (req, res) => {
    const {username, password} = req.body

    // encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8)

    try {
        const insertUser = db.prepare(`INSERT INTO users (username, password) 
        VALUES (?, ?)`)

        const result = insertUser.run(username, hashedPassword)

        // default 'welcome' post
        const defaultPost = `Welcome!, Add your first post :)`
        const insertPost = db.prepare(`INSERT INTO blog_post (user_id, content)
        VALUES (?, ?)`)

        insertPost.run(result.lastInsertRowid, defaultPost)

        // creating a token
        const token = jwt.sign({ id: result.lastInsertRowid }, 
        process.env.JWT_SECRET, { expiresIn: '24h' })
        
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

router.post('/login', (req, res) => { 
    const {username, password} = req.body
    console.log(username, password)
    res.sendStatus(201)
})

export default router;