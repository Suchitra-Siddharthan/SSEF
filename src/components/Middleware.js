import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Middleware() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
    >
      <h2 style={{ color: '#1a2233', marginBottom: '1.5rem', fontSize: '2rem' }}>
        ♻️ Middleware
      </h2>
      
      <div style={{ 
        background: '#f8fafc', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginBottom: '2rem',
        border: '1px solid #e2e8f0'
      }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#334155' }}>
          Middleware are functions that run <strong>before</strong> the final route handler. They're like checkpoints along the request path.
        </p>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔎 Uses:</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ 
            background: '#f0f9ff', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }}>
            <h4 style={{ color: '#0369a1', marginBottom: '0.5rem' }}>Logging</h4>
            <p style={{ fontSize: '0.9rem', color: '#0c4a6e' }}>Track requests and responses</p>
          </div>
          <div style={{ 
            background: '#f0fdf4', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #bbf7d0'
          }}>
            <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>Body Parsing</h4>
            <p style={{ fontSize: '0.9rem', color: '#166534' }}>Parse JSON, form data</p>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #fde68a'
          }}>
            <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>Security</h4>
            <p style={{ fontSize: '0.9rem', color: '#78350f' }}>CORS, rate limiting</p>
          </div>
          <div style={{ 
            background: '#fdf2f8', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #f9a8d4'
          }}>
            <h4 style={{ color: '#be185d', marginBottom: '0.5rem' }}>Authentication</h4>
            <p style={{ fontSize: '0.9rem', color: '#831843' }}>Verify user identity</p>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔹 Example:</h3>
      
      <div style={{ marginBottom: '2rem' }}>
        <SyntaxHighlighter 
          language="javascript" 
          style={vscDarkPlus} 
          customStyle={{ borderRadius: '12px', fontSize: '0.9rem' }}
        >
          {`// Global middleware - applied to all routes
app.use(express.json()); // parses JSON body
app.use(express.urlencoded({ extended: true })); // parses form data

// Custom logging middleware
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next();
});

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Route-specific middleware
app.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

// Error handling middleware (must be last)
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});`}
        </SyntaxHighlighter>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>💡 Types:</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
          <div style={{ 
            background: '#f0f9ff', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '1px solid #bae6fd'
          }}>
            <h4 style={{ color: '#0369a1', marginBottom: '1rem' }}>Global</h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#0c4a6e' }}>
              Applied to all routes in the application
            </p>
            <code className="code-light" style={{ color: '#0369a1', fontSize: '0.9rem' }}>app.use(middleware)</code>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '1px solid #fde68a'
          }}>
            <h4 style={{ color: '#92400e', marginBottom: '1rem' }}>Route-specific</h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#78350f' }}>
              Used for a single route or group of routes
            </p>
            <code className="code-light" style={{ color: '#92400e', fontSize: '0.9rem' }}>app.get('/', middleware, handler)</code>
          </div>
          <div style={{ 
            background: '#fdf2f8', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '1px solid #f9a8d4'
          }}>
            <h4 style={{ color: '#be185d', marginBottom: '1rem' }}>Error-handling</h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#831843' }}>
              Catches and processes errors
            </p>
            <code className="code-light" style={{ color: '#be185d', fontSize: '0.9rem' }}>app.use(error, req, res, next)</code>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔄 Middleware Flow</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '2rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <svg width="100%" height="100" viewBox="0 0 800 100">
          <rect x="20" y="30" width="80" height="40" rx="8" fill="#3b82f6" />
          <text x="60" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Request</text>
          
          <polygon points="100,50 150,50 150,55 100,55" fill="#3b82f6" />
          <rect x="150" y="30" width="100" height="40" rx="8" fill="#10b981" />
          <text x="200" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Logging</text>
          
          <polygon points="250,50 300,50 300,55 250,55" fill="#10b981" />
          <rect x="300" y="30" width="100" height="40" rx="8" fill="#f59e0b" />
          <text x="350" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Auth</text>
          
          <polygon points="400,50 450,50 450,55 400,55" fill="#f59e0b" />
          <rect x="450" y="30" width="100" height="40" rx="8" fill="#8b5cf6" />
          <text x="500" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Route</text>
          
          <polygon points="550,50 600,50 600,55 550,55" fill="#8b5cf6" />
          <rect x="600" y="30" width="80" height="40" rx="8" fill="#ef4444" />
          <text x="640" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Response</text>
        </svg>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <span>1. Request</span>
          <span>2. Logging</span>
          <span>3. Auth</span>
          <span>4. Route</span>
          <span>5. Response</span>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔧 Common Middleware</h3>
      
      <div style={{ 
        background: '#f1f5f9', 
        padding: '1.5rem', 
        borderRadius: '12px',
        borderLeft: '4px solid #3b82f6',
        marginBottom: '2rem'
      }}>
        <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: '#334155', margin: 0,textAlign: 'left' }}>
          <li><strong>express.json():</strong> Parse JSON request bodies</li>
          <li><strong>express.static():</strong> Serve static files</li>
          <li><strong>cors:</strong> Handle Cross-Origin Resource Sharing</li>
          <li><strong>helmet:</strong> Security headers</li>
          <li><strong>morgan:</strong> HTTP request logging</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Middleware; 