import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./route/user.route.js"
import companyRoute from "./route/company.route.js"
import jobRoute from "./route/job.route.js"
import applicationRoute from "./route/application.route.js"
dotenv.config({});

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// Configure CORS based on environment
const corsOptions = {
    origin: [
        "https://jobportal-frontend-1mi2.onrender.com",
        "https://job-portal-omega-tawny.vercel.app",
        "https://job-portal-git-main-2200032748cseh-3416s-projects.vercel.app",
        "https://job-portal-1e1vb2yfk-2200032748cseh-3416s-projects.vercel.app",
        "http://localhost:5173"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization","Accept"]
}
app.use(cors(corsOptions))


const PORT = process.env.PORT || 3000;

// Health check endpoint for deployment platforms
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "JobVista API is running",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use("/api/v1/user", userRoute)
app.use("/api/v1/company", companyRoute)
app.use("/api/v1/job", jobRoute)
app.use("/api/v1/application", applicationRoute)


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
