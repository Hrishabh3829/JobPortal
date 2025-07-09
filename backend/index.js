import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./route/user.route.js"
import companyRoute from "./route/company.route.js"
import jobRoute from "./route/job.route.js"
import applicationRoute from "./route/application.route.js"
import path from "path";

dotenv.config({});


const app = express();
const __dirname = path.resolve();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Configure CORS based on environment
const corsOptions = {
    origin: [
        
        "https://jobvista-5icq.onrender.com"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization","Accept"]
}
app.use(cors(corsOptions))


const PORT = process.env.PORT || 3000;


// API routes
app.use("/api/v1/user", userRoute)
app.use("/api/v1/company", companyRoute)
app.use("/api/v1/job", jobRoute)
app.use("/api/v1/application", applicationRoute)

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})


// Add basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: process.env.NODE_ENV === 'production' 
            ? 'Something went wrong' 
            : err.message,
        error: process.env.NODE_ENV === 'production' ? {} : err
    });
});

// Add 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Start the server
const server = app.listen(PORT, () => {
    connectDB();
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});
