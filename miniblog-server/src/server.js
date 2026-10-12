import express from 'express'
const app = express();
const PORT = 3000;

let data = ["james"]

//Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Hello from ${req.method}`);
})

app.get('/api/users', (req, res) => {
    res.send(data);
})

app.post('/api/users', (req, res) => {
    const newEntry = req.body
    res.sendStatus(201)
    data.push(newEntry.name)
    console.log(newEntry)
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})