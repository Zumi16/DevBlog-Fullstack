import express, { json } from 'express'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

// Middlleware
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.get('/', (req, res) => {
    res.send(`Hello from ${req.method}`);
})

// Routes
app.use('/auth', authRoutes)
app.use('/posts', authMiddleware, postRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})