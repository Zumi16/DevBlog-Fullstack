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

    try {
        const getUser = db.prepare('SELECT * FROM users where username = ?')
        const user = getUser.get(username)

        if (!user) { return res.status(404).send({ message: "User not found" }) }

        const passwordIsValid = bcrypt.compareSync(password, user.password)

        if (!passwordIsValid) { return res.status(404).send({ message: "Invalid password" }) }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })

        console.log(user)
    } catch (err) {
        console.log(err.message)
        res.status(503)
    }
})

export default router;