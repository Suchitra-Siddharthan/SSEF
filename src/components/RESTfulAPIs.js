import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function RESTfulAPIs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
    >
      <h2 style={{ color: '#1a2233', marginBottom: '1.5rem', fontSize: '2rem' }}>
        📊 RESTful APIs
      </h2>
      
      <div style={{ 
        background: '#f8fafc', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginBottom: '2rem',
        border: '1px solid #e2e8f0'
      }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#334155' }}>
          REST APIs expose your server's functionality over HTTP in a standardized way. They provide a clean interface for clients to interact with your backend.
        </p>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔎 REST Principles:</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: '#334155' ,textAlign: 'left'}}>
          <li><strong>Stateless:</strong> Each request contains all information needed</li>
          <li><strong>Uses standard HTTP methods:</strong> GET, POST, PUT, DELETE</li>
          <li><strong>Resource-based URLs:</strong> e.g., <code-light >/api/users/:id</code-light></li>
          <li><strong>Representational:</strong> Data is transferred in JSON/XML format</li>
        </ul>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔹 Example:</h3>
      
      <div style={{ marginBottom: '2rem' }}>
        <SyntaxHighlighter 
          language="javascript" 
          style={vscDarkPlus} 
          customStyle={{ borderRadius: '12px', fontSize: '0.9rem' }}
        >
          {`// Get a specific user
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete user
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`}
        </SyntaxHighlighter>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🌐 HTTP Methods</h3>
      
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
            <h4 style={{ color: '#0369a1', marginBottom: '0.5rem' }}>GET</h4>
            <p style={{ fontSize: '0.9rem', color: '#0c4a6e' }}>Retrieve data</p>
            <code className="code-light" style={{ color: '#0369a1' }}>/api/users</code>
          </div>
          <div style={{ 
            background: '#f0fdf4', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #bbf7d0'
          }}>
            <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>POST</h4>
            <p style={{ fontSize: '0.9rem', color: '#166534' }}>Create new data</p>
            <code className="code-light" style={{ color: '#059669' }}>/api/users</code>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #fde68a'
          }}>
            <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>PUT</h4>
            <p style={{ fontSize: '0.9rem', color: '#78350f' }}>Update data</p>
            <code className="code-light" style={{ color: '#92400e' }}>/api/users/:id</code>
          </div>
          <div style={{ 
            background: '#fef2f2', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #fecaca'
          }}>
            <h4 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>DELETE</h4>
            <p style={{ fontSize: '0.9rem', color: '#991b1b' }}>Remove data</p>
            <code className="code-light" style={{ color: '#dc2626' }}>/api/users/:id</code>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>💡 Tools:</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ 
            background: '#f0f9ff', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '1px solid #bae6fd'
          }}>
            <h4 style={{ color: '#0369a1', marginBottom: '1rem' }}>Testing APIs</h4>
            <ul style={{ fontSize: '1rem', lineHeight: '1.6', color: '#0c4a6e',textAlign: 'left' }}>
              <li>Postman</li>
              <li>Thunder Client (VS Code)</li>
              <li>Insomnia</li>
              <li>cURL</li>
            </ul>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '1px solid #fde68a'
          }}>
            <h4 style={{ color: '#92400e', marginBottom: '1rem' }}>API Documentation</h4>
            <ul style={{ fontSize: '1rem', lineHeight: '1.6', color: '#78350f',textAlign: 'left' }}>
              <li>Swagger/OpenAPI</li>
              <li>Postman Collections</li>
              <li>README files</li>
              <li>Interactive docs</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔗 API Response Format</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '2rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <SyntaxHighlighter 
          language="json" 
          style={vscDarkPlus} 
          customStyle={{ borderRadius: '12px', fontSize: '0.9rem' }}
        >
          {`{
  "success": true,
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "Suchitra S",
    "email": "suchi@gmail.com",
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "message": "User retrieved successfully"
}`}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
}

export default RESTfulAPIs; 