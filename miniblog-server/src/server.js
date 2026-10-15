import express, { json } from 'express'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Middlleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Hello from ${req.method}`);
})

// Routes
app.use('/auth', authRoutes)
app.use('/posts', postRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})