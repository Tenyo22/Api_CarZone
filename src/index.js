const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require("./routes/user.js");
const brandsRoutes = require("./routes/brands.js")
const carsRoutes = require("./routes/cars.js");

// Variable de ambiente customizada
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);
app.use('/brands', brandsRoutes);
app.use('/cars', carsRoutes)

// Routes
// app.get('/', (req, res) => {
//     res.send('Welcome to my API!');
// });

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));


app.listen(port, () => console.log(`Server running at http://localhost:`, port));