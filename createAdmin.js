require("dotenv").config(); 
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");
const connectDB = require("./config/db");

connectDB();

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("admin@123", 10);
  const admin = new Admin({
    email: "admin@example.com",
    password: hashedPassword,
    name: "Super Admin"
  });

  await admin.save();
  console.log("Admin created");
};

createAdmin();
// This code connects to a MongoDB database and creates an admin user with a hashed password.