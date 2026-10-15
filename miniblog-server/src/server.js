import express, { json } from 'express'
import authRoutes from './routes/authRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

//Middlleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Hello from ${req.method}`);
})

app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})