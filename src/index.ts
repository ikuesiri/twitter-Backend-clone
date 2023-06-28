import express from 'express';
const app = express()

app.use(express.json())

/** Home Route */
app.get("/", (req, res) =>{
    res.send("Hello World!");
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server listening at http://localhost:${PORT}`)
})