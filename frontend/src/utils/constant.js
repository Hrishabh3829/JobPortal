// Get the base API URL from environment or fall back to localhost for development
const API_BASE_URL = "https://jobvista-5icq.onrender.com/api/v1";

// Export the endpoints using the base URL
export const USER_API_END_POINT = `${API_BASE_URL}/user`;
export const JOB_API_END_POINT = `${API_BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${API_BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${API_BASE_URL}/company`;

