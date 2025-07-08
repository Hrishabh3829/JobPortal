<!DOCTYPE html>
<html lang="en">

  <h1>🚀 JobVista – Full Stack Job Portal</h1>

  <p><strong>JobVista</strong> is a modern, full-stack job portal built using the <strong>MERN stack</strong> — MongoDB, Express.js, React, and Node.js — with a sleek interface styled using <strong>Tailwind CSS</strong> and componentized with <strong><a href="https://ui.shadcn.com" target="_blank">shadcn/ui</a></strong>. The project is structured with a <code>backend</code> directory for the Express API and a <code>frontend</code> directory for the React app built with Vite.</p>

  <p>To get started, you’ll need <strong>Node.js (version 18 or later)</strong>, <strong>npm</strong>, and access to <strong>MongoDB</strong>, either via a local instance or <a href="https://www.mongodb.com/cloud/atlas" target="_blank">MongoDB Atlas</a>. Clone the repository, then set up both the frontend and backend as follows:</p>

  <h2>Frontend Setup</h2>
  <p>Navigate into the <code>frontend</code> folder. Run <code>npm install</code> to install dependencies, then start the development server with <code>npm run dev</code>. The application will be available at <code>http://localhost:5173</code>.</p>
  <p>To support path aliases required for shadcn/ui, make sure to update your <code>tsconfig.json</code> (or <code>jsconfig.json</code>) with the following configuration:</p>
  <pre><code>{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}</code></pre>

  <h2>Backend Setup</h2>
  <p>Move into the <code>backend</code> folder and run <code>npm install</code> to install the dependencies. Create a <code>.env</code> file in the same directory and include the following environment variables:</p>
  <pre><code>PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key</code></pre>
  <p>Once your environment is set, start the backend with <code>npm run dev</code>. The API will be available at <code>http://localhost:8000</code>.</p>

  <h2>Development Scripts</h2>
  <p>You can run the following commands during development:</p>
  <ul>
    <li><code>npm run dev</code> in <code>/frontend</code> – starts the frontend app</li>
    <li><code>npm run dev</code> in <code>/backend</code> – starts the backend API</li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, Vite, Tailwind CSS, shadcn/ui</li>
    <li><strong>Backend:</strong> Node.js, Express.js</li>
    <li><strong>Database:</strong> MongoDB </li>
    <li><strong>Authentication:</strong> JWT</li>
  </ul>

  <h2>Deployment Instructions</h2>
  <p>Follow these steps to deploy your JobVista application to production:</p>

  <h3>Backend Deployment</h3>
  <ol>
    <li><strong>Environment Setup:</strong> Copy <code>.env.example</code> to <code>.env</code> and fill in the production values</li>
    <li><strong>Database:</strong> Ensure your MongoDB Atlas cluster is properly configured with network access</li>
    <li><strong>Hosting Options:</strong>
      <ul>
        <li><strong>Render:</strong> Connect your GitHub repository and use the following build command: <code>cd backend && npm install</code> and start command: <code>cd backend && npm start</code></li>
        <li><strong>Vercel:</strong> Use the Vercel CLI and configure using <code>vercel.json</code></li>
        <li><strong>Railway/Heroku:</strong> Configure using their respective CLI tools or dashboard</li>
      </ul>
    </li>
  </ol>

  <h3>Frontend Deployment</h3>
  <ol>
    <li><strong>Environment Setup:</strong> Create <code>.env.production</code> with your backend API URL:
      <pre><code>VITE_API_BASE_URL=https://your-backend-url.com/api/v1</code></pre>
    </li>
    <li><strong>Build the App:</strong> Run <code>npm run build</code> to generate optimized production files</li>
    <li><strong>Hosting Options:</strong>
      <ul>
        <li><strong>Vercel:</strong> Connect your GitHub repository or use the Vercel CLI</li>
        <li><strong>Netlify:</strong> Connect your repository or drag and drop the <code>dist</code> folder</li>
        <li><strong>GitHub Pages:</strong> Configure with proper base path in <code>vite.config.js</code></li>
      </ul>
    </li>
  </ol>

  <h3>Important Deployment Considerations</h3>
  <ul>
    <li>Set <code>NODE_ENV=production</code> in your backend environment</li>
    <li>Configure CORS to accept requests only from your frontend domain</li>
    <li>Set up proper error logging and monitoring</li>
    <li>Consider using a CI/CD pipeline for automated deployments</li>
    <li>Set up SSL for secure HTTPS connections</li>
  </ul>

  <h2>Author</h2>
  <p>Developed by <strong>[Hrishabh3829]</strong>. Feel free to fork, contribute, and star ⭐ the repo if you find it useful!</p>

</body>
</html>
