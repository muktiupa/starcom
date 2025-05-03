const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();;
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use("api/admin", adminRoutes)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);
//for server connection
