const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(' Backend/API is running...');
}   
// server page 
);
//routes
app.use("/api/admin", adminRoutes)



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);
//for server connection
