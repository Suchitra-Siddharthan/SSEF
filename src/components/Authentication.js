import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Authentication() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
    >
      <h2 style={{ color: '#1a2233', marginBottom: '1.5rem', fontSize: '2rem' }}>
        🔐 Authentication & Authorization
      </h2>
      
      <div style={{ 
        background: '#f8fafc', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginBottom: '2rem',
        border: '1px solid #e2e8f0'
      }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#334155' }}>
          These mechanisms protect your application and control access. Authentication verifies identity, while authorization controls permissions.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ 
          background: '#fff', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>🔎 Authentication:</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#334155' }}>
            Verifies who the user is (e.g., login with email/password).
          </p>
          <div style={{ 
            background: '#fef2f2', 
            padding: '1rem', 
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <strong style={{ color: '#dc2626' }}>Example:</strong>
            <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' ,textAlign: 'left'}}>
              <li>Email + Password login</li>
              <li>Fingerprint/face recognition</li>
              <li>Two-factor authentication</li>
            </ul>
          </div>
        </div>

        <div style={{ 
          background: '#fff', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#059669', marginBottom: '1rem' }}>🔎 Authorization:</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#334155' }}>
            Determines what actions the authenticated user can perform.
          </p>
          <div style={{ 
            background: '#f0fdf4', 
            padding: '1rem', 
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <strong style={{ color: '#059669' }}>Example:</strong>
            <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' ,textAlign: 'left'}}>
              <li>Admin can delete users</li>
              <li>User can edit own profile</li>
              <li>Guest can only view public content</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔹 Methods:</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ 
            background: '#f0f9ff', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }}>
            <h4 style={{ color: '#0369a1', marginBottom: '0.5rem' }}>Session-based auth</h4>
            <p style={{ fontSize: '0.9rem', color: '#0c4a6e' }}>Stores session info on server</p>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #fde68a'
          }}>
            <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>JWT (JSON Web Tokens)</h4>
            <p style={{ fontSize: '0.9rem', color: '#78350f' }}>Sends a token with each request</p>
          </div>
          <div style={{ 
            background: '#fdf2f8', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #f9a8d4'
          }}>
            <h4 style={{ color: '#be185d', marginBottom: '0.5rem' }}>OAuth</h4>
            <p style={{ fontSize: '0.9rem', color: '#831843' }}>Login using Google/Facebook</p>
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
          {`// Middleware to check authentication
function isAuthenticated(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ 
      error: 'Access denied. No token provided.' 
    });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
}

// Middleware to check authorization
function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ 
      error: 'Access denied. Admin role required.' 
    });
  }
}

// Protected route
app.get('/admin/users', isAuthenticated, isAdmin, (req, res) => {
  // Only admins can access this route
  res.json(users);
});`}
        </SyntaxHighlighter>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔐 Security Flow</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '2rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <svg width="100%" height="100" viewBox="0 0 800 100">
          <rect x="20" y="30" width="80" height="40" rx="8" fill="#ef4444" />
          <text x="60" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Login</text>
          
          <polygon points="100,50 150,50 150,55 100,55" fill="#ef4444" />
          <rect x="150" y="30" width="100" height="40" rx="8" fill="#10b981" />
          <text x="200" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Verify</text>
          
          <polygon points="250,50 300,50 300,55 250,55" fill="#10b981" />
          <rect x="300" y="30" width="100" height="40" rx="8" fill="#3b82f6" />
          <text x="350" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Token</text>
          
          <polygon points="400,50 450,50 450,55 400,55" fill="#3b82f6" />
          <rect x="450" y="30" width="100" height="40" rx="8" fill="#8b5cf6" />
          <text x="500" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Access</text>
          
          <polygon points="550,50 600,50 600,55 550,55" fill="#8b5cf6" />
          <rect x="600" y="30" width="80" height="40" rx="8" fill="#059669" />
          <text x="640" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Resource</text>
        </svg>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <span>1. Login</span>
          <span>2. Verify</span>
          <span>3. Token</span>
          <span>4. Access</span>
          <span>5. Resource</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Authentication; 