# 🚀 JobVista - Full Stack Job Portal

## Overview
JobVista is a modern job portal built with the MERN stack (MongoDB, Express.js, React, Node.js). It connects job seekers with employers through an intuitive interface featuring real-time updates, user authentication, and responsive design.

## Features
- **User Authentication**: Secure login/signup system for both job seekers and employers
- **Job Listings**: Browse, search, and filter jobs by various criteria
- **Company Profiles**: Detailed company information for potential applicants
- **Application Management**: Apply to jobs and track application status
- **Admin Dashboard**: Manage job postings, applications, and company profiles
- **Responsive Design**: Works on both desktop and mobile devices
- **PDF Resume Support**: Upload and view PDF resumes

## Tech Stack
- **Frontend**: React.js, Redux Toolkit, Tailwind CSS, Shadcn/UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **File Storage**: Cloudinary
- **Deployment**: Render

## Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with the following variables
PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_key
API_SECRET=your_cloudinary_secret
FRONTEND_URL=your_frontend_url

# Start the development server
npm run dev
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment
For deploying the application, the following steps are recommended:

1. **Backend**:
   - Set all environment variables in the hosting platform
   - Current deployment: https://jobportal-backend-fwib.onrender.com

2. **Frontend**:
   - Set production environment variables
   - Build with `npm run build`
   - Current deployment: https://jobportal-frontend-1mi2.onrender.com

## Project Structure
```
.
├── backend/                 # Express server
│   ├── controllers/         # Route controllers
│   ├── middlewares/         # Custom middlewares
│   ├── models/              # Mongoose models
│   ├── route/               # API routes
│   └── utils/               # Utility functions
└── frontend/
    ├── public/              # Static files
    └── src/
        ├── assets/          # Images, etc.
        ├── components/      # React components
        │   ├── admin/       # Admin components
        │   ├── auth/        # Authentication components
        │   ├── shared/      # Shared components
        │   └── ui/          # UI components (shadcn)
        ├── hooks/           # Custom hooks
        └── redux/           # State management
```

## Important Deployment Considerations
- Configure CORS to accept requests only from your frontend domain
- Set up SSL for secure HTTPS connections
- Use environment variables for sensitive information
- Make sure to set `--include=dev` when installing frontend dependencies during build

## Author
Developed by **[Hrishabh3829](https://github.com/Hrishabh3829)**
