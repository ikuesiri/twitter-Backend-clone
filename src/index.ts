import express from 'express';
import userRoute from './routes/userRouter';
import tweetRoute from './routes/tweetRoute';
const app = express()

app.use(express.json())
app.use("/user", userRoute);
app.use("/tweet", tweetRoute);


/** Home Route */
app.get("/", (req, res) => res.send("Hello World!"))




const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server listening at http://localhost:${PORT}`)
})