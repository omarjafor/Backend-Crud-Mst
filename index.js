const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./src/routes/productRoute');
const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(express.json());

// connect to mongodb
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.log('MongoDB connection error', err);
});

app.use('/api/products', router);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})

app.get('/', (req, res) => {
    res.send('Welcome to backend first project');
})