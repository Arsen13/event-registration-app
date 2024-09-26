const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const connectMongoDB = require("./db/connectMongoDB");

const eventRoutes = require('./routes/event.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/event", eventRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})
