import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './config/dbConnect.js'
import authrouter from './routes/authRoutes.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express()
app.use(cors());
app.use(express.json());
app.use(cookieParser());
// config({
//     path: "./.env"
// })
dotenv.config()
db();
const PORT = process.env.PORT || 4000;

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))



app.use("/api/user", authrouter)
// db.connect((err) => {
//     if (err) throw err;
//     console.log("conneced");
// });

// app.get('/', (req, res) => {
//     const sql = 'SELECT * from Employees'
//     db.query(sql, (err, result) => {
//         if (err) return res.json({ Message: err.message })
//         return res.json(result);
//     })
// })

app.listen(PORT, () => {
    console.log(`server is listenin to ${PORT}`)
})