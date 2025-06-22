import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Routing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
    >
      <h2 style={{ color: '#1a2233', marginBottom: '1.5rem', fontSize: '2rem' }}>
        📍 Routing
      </h2>
      
      <div style={{ 
        background: '#f8fafc', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginBottom: '2rem',
        border: '1px solid #e2e8f0'
      }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#334155' }}>
          Routing determines how incoming requests are handled. It's like a traffic controller that directs requests to the right handler.
        </p>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔎 Concepts:</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem',
        textAlign: 'left'
      }}>
        <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: '#334155' }}>
          <li>Each URL is mapped to a specific function.</li>
          <li>Routes can be <strong>static</strong> (e.g., <code className="code-light" style={{color: '#334155'}}>/about</code>) or <strong>dynamic</strong> (<code className="code-light"style={{color: '#334155'}}>/user/:id</code>).</li>
            <li>RESTful routes follow conventions like <code className="code-light" style={{color: '#334155'}}>/users</code> or <code className="code-light"style={{color: '#334155'}}>/posts/:id</code>.</li>
        </ul>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔹 Example in Node.js:</h3>
      
      <div style={{ marginBottom: '2rem' }}>
        <SyntaxHighlighter 
          language="javascript" 
          style={vscDarkPlus} 
          customStyle={{ borderRadius: '12px', fontSize: '0.9rem' }}
        >
          {`// Basic route
app.get('/profile', (req, res) => {
  res.send('User Profile');
});

// Dynamic route with parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId: userId, name: 'John Doe' });
});

// RESTful routes
app.get('/api/users', (req, res) => {
  // Get all users
});

app.post('/api/users', (req, res) => {
  // Create new user
});

app.put('/api/users/:id', (req, res) => {
  // Update user
});

app.delete('/api/users/:id', (req, res) => {
  // Delete user
});`}
        </SyntaxHighlighter>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🛣️ Route Types</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ 
            background: '#f0f9ff', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }}>
            <h4 style={{ color: '#0369a1', marginBottom: '0.5rem' }}>Static Routes</h4>
            <code className="code-light" style={{ color: '#0c4a6e' }}>/about</code><br/>
            <code className="code-light" style={{ color: '#0c4a6e' }}>/contact</code><br/>
            <code className="code-light" style={{ color: '#0c4a6e' }}>/home</code>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #fde68a'
          }}>
            <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>Dynamic Routes</h4>
            <code className="code-light" style={{ color: '#78350f' }}>/user/:id</code><br/>
            <code className="code-light" style={{ color: '#78350f' }}>/post/:slug</code><br/>
            <code className="code-light" style={{ color: '#78350f' }}>/product/:category/:id</code>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>💡 Pro Tip:</h3>
      
      <div style={{ 
        background: '#f0fdf4', 
        padding: '1.5rem', 
        borderRadius: '12px',
        border: '1px solid #bbf7d0'
      }}>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#166534', margin: 0 }}>
          <strong>Group related routes into modules</strong> (e.g., <code className="code-light" style={{color: '#166534'}}>authRoutes</code>, <code className="code-light"  style={{color: '#166534'}}>userRoutes</code>) to keep code clean and maintainable.
        </p>
      </div>
    </motion.div>
  );
}

export default Routing; 