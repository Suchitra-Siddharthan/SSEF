import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import { useEffect } from 'react';

const topics = [
  {
    id: 'introduction',
    title: '1. Introduction',
    description: 'What is SSFE and why it\'s important',
  },
  {
    id: 'architecture',
    title: '2. Client–Server Architecture',
    description: 'How frontend and backend communicate',
  },
  {
    id: 'routing',
    title: '3. Routing & HTTP Methods',
    description: 'How URLs and requests are handled',
  },
  {
    id: 'auth',
    title: '4. Authentication & Authorization',
    description: 'Secure login and permissions',
  },
  {
    id: 'database',
    title: '5. Database Integration',
    description: 'Connecting to and working with DBs',
  },
];

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <h1>Server Side Engineering Fundamentals</h1>
        <p className="header-subtitle">Master the backend: from architecture to authentication, routing, and databases</p>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Server Side Engineering Fundamentals</span>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side" target="_blank" rel="noopener noreferrer">More Resources</a>
      </div>
    </footer>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title" style={{textAlign:'center'}}>Topics</h1>
      <nav className="sidebar-nav">
        {topics.map((topic) => (
          <Link key={topic.id} to={`/topic/${topic.id}`} className="sidebar-link">
            <div className="sidebar-link-title">{topic.title}</div>
            <div className="sidebar-link-desc">{topic.description}</div>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function PrismCode({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);
  return (
    <pre className={`code-block language-${language}`}><code dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages[language], language) }} /></pre>
  );
}

function TopicContent({ id }) {
  switch (id) {
    case 'introduction':
      return (
        <div className="topic-content">
          <h2>1. Introduction to Server-Side Engineering Fundamentals (SSFE)</h2>
          <p><b>Server-Side Engineering Fundamentals</b> (SSFE) is the backbone of modern web applications. It covers the principles, tools, and best practices for building robust, scalable, and secure backend systems.</p>
          <ul>
            <li>Enables user authentication and authorization</li>
            <li>Connects to and manages databases</li>
            <li>Powers APIs, business logic, and data processing</li>
            <li>Handles sessions, errors, and performance optimization</li>
          </ul>
          <div className="highlight-box">
            <b>Analogy:</b> If a website were a restaurant, the frontend is the waiter (taking your order), and the backend is the kitchen (preparing your food and managing orders).
          </div>
          <h3>Why SSFE Matters</h3>
          <ul>
            <li>Ensures data security and privacy</li>
            <li>Enables complex business logic</li>
            <li>Scales to handle thousands or millions of users</li>
          </ul>
          <h3>Example: Simple Node.js Server</h3>
          <PrismCode code={`const http = require('http');\nhttp.createServer((req, res) => {\n  res.write('Hello from the server!');\n  res.end();\n}).listen(3000);`} language="javascript" />
          <img className="topic-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="60" />
        </div>
      );
    case 'architecture':
      return (
        <div className="topic-content">
          <h2>2. Client–Server Architecture</h2>
          <p>The web uses a <b>client-server model</b> where the client (browser/app) requests resources and the server responds.</p>
          <div className="highlight-box">
            <b>Analogy:</b> Think of a library: you (client) request a book, the librarian (server) fetches it for you.
          </div>
          <h3>Request-Response Flow</h3>
          <ol>
            <li>Client sends an HTTP request (e.g., login)</li>
            <li>Server identifies the route and request type (GET, POST, etc.)</li>
            <li>Middleware (like authentication) processes the request</li>
            <li>Business logic runs</li>
            <li>Database operations are performed (if needed)</li>
            <li>Server sends an HTTP response</li>
          </ol>
          <img className="topic-img" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1nQbQw1nQbQw1nQbQw1nQw.png" alt="Client-Server Diagram" width="320" />
          <h3>Example: Express.js Route</h3>
          <PrismCode code={`app.get('/books', (req, res) => {\n  res.json([{ title: '1984' }, { title: 'Brave New World' }]);\n});`} language="javascript" />
        </div>
      );
    case 'routing':
      return (
        <div className="topic-content">
          <h2>3. Routing and HTTP Methods</h2>
          <p>Routing determines how a server responds to different URLs and HTTP methods.</p>
          <div className="highlight-box">
            <b>Analogy:</b> Routing is like a receptionist directing visitors to the right office in a building.
          </div>
          <h3>HTTP Methods Table</h3>
          <table className="http-table">
            <thead>
              <tr><th>Method</th><th>Purpose</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td>GET</td><td>Fetch data</td><td>/api/posts</td></tr>
              <tr><td>POST</td><td>Submit new data</td><td>/api/register</td></tr>
              <tr><td>PUT</td><td>Update data</td><td>/api/profile/123</td></tr>
              <tr><td>DELETE</td><td>Remove data</td><td>/api/post/456</td></tr>
            </tbody>
          </table>
          <h3>Express.js Routing Example</h3>
          <PrismCode code={`app.get('/users', getUsers);\napp.post('/login', handleLogin);\napp.put('/profile/:id', updateProfile);\napp.delete('/post/:id', deletePost);`} language="javascript" />
          <h3>Bonus: Dynamic Routing Example</h3>
          <PrismCode code={`app.get('/user/:userId', (req, res) => {\n  res.send('User ID: ' + req.params.userId);\n});`} language="javascript" />
        </div>
      );
    case 'auth':
      return (
        <div className="topic-content">
          <h2>4. Authentication and Authorization</h2>
          <p><b>Authentication</b> is verifying who you are. <b>Authorization</b> is checking what you can do.</p>
          <div className="highlight-box">
            <b>Analogy:</b> Authentication is showing your ID at the door; authorization is whether you can enter the VIP lounge.
          </div>
          <h3>Common Techniques</h3>
          <ul>
            <li>Sessions and Cookies (for logged-in states)</li>
            <li>JSON Web Tokens (JWT) – Secure token-based authentication</li>
            <li>OAuth – Login via Google, GitHub, etc.</li>
          </ul>
          <h3>Authentication Flow Example</h3>
          <PrismCode code={`// Login route\napp.post('/login', async (req, res) => {\n  const { username, password } = req.body;\n  // Verify credentials...\n  // On success:\n  const token = jwt.sign({ username }, 'secret');\n  res.json({ token });\n});`} language="javascript" />
          <h3>JWT Example</h3>
          <PrismCode code={`// Middleware to check JWT\nfunction authMiddleware(req, res, next) {\n  const token = req.headers['authorization'];\n  if (!token) return res.status(401).send('No token');\n  try {\n    const user = jwt.verify(token, 'secret');\n    req.user = user;\n    next();\n  } catch {\n    res.status(403).send('Invalid token');\n  }\n}`} language="javascript" />
          <img className="topic-img" src="https://jwt.io/img/pic_logo.svg" alt="JWT Logo" width="80" />
        </div>
      );
    case 'database':
      return (
        <div className="topic-content">
          <h2>5. Database Integration</h2>
          <p>Servers interact with databases to store, retrieve, and manage data.</p>
          <div className="highlight-box">
            <b>Analogy:</b> The database is like a giant digital filing cabinet for your app.
          </div>
          <h3>Types of Databases</h3>
          <ul>
            <li><b>Relational (SQL):</b> MySQL, PostgreSQL</li>
            <li><b>NoSQL:</b> MongoDB, Firebase</li>
          </ul>
          <h3>Server-side Tools</h3>
          <ul>
            <li>SQL + Node: <code>mysql2</code>, <code>sequelize</code></li>
            <li>MongoDB + Node: <code>mongoose</code></li>
          </ul>
          <h3>Example: Mongoose Query</h3>
          <PrismCode code={`const user = await User.findOne({ email: 'test@example.com' });`} language="javascript" />
          <h3>Example: Sequelize Model</h3>
          <PrismCode code={`const User = sequelize.define('User', {\n  username: Sequelize.STRING,\n  email: Sequelize.STRING\n});`} language="javascript" />
          <h3>Best Practices</h3>
          <ul>
            <li>Use async/await for queries</li>
            <li>Handle errors gracefully</li>
            <li>Validate input to prevent SQL/NoSQL injection</li>
            <li>Use environment variables for DB credentials</li>
          </ul>
          <img className="topic-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="60" />
        </div>
      );
    default:
      return <div className="topic-content">Topic not found.</div>;
  }
}

function ContentArea() {
  const { id } = useParams();
  // Show 'introduction' by default if no id is present
  const topicId = id || 'introduction';
  return (
    <div className="content-area">
      <TopicContent id={topicId} />
    </div>
  );
}

function App() {
  return (
    <div className="main-outer">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ContentArea />} />
          <Route path="/topic/:id" element={<ContentArea />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
