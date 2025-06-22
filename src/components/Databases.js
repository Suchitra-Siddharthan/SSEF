import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Databases() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
    >
      <h2 style={{ color: '#1a2233', marginBottom: '1.5rem', fontSize: '2rem' }}>
        📂 Databases & Persistence
      </h2>
      
      <div style={{ 
        background: '#f8fafc', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginBottom: '2rem',
        border: '1px solid #e2e8f0'
      }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#334155' }}>
          Data needs to be stored reliably across sessions. Databases provide persistent storage for your application's data.
        </p>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔎 Types:</h3>
      
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
            <h4 style={{ color: '#0369a1', marginBottom: '1rem' }}>Relational DBs (SQL)</h4>
            <ul style={{ fontSize: '1rem', lineHeight: '1.6', color: '#0c4a6e',textAlign: 'left' }}>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>Oracle</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: '#0369a1', marginTop: '1rem' }}>
              <strong>Best for:</strong> Structured data with relationships
            </p>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '1px solid #fde68a'
          }}>
            <h4 style={{ color: '#92400e', marginBottom: '1rem' }}>NoSQL DBs</h4>
            <ul style={{ fontSize: '1rem', lineHeight: '1.6', color: '#78350f',textAlign: 'left' }}>
              <li>MongoDB</li>
              <li>CouchDB</li>
              <li>Redis</li>
              <li>Cassandra</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: '#92400e', marginTop: '1rem' }}>
              <strong>Best for:</strong> Flexible schema, scalability
            </p>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔹 CRUD Operations:</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ 
            background: '#f0fdf4', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #bbf7d0'
          }}>
            <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>Create</h4>
            <code className="code-light" style={{ color: '#166534' }}>INSERT</code>
          </div>
          <div style={{ 
            background: '#f0f9ff', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }}>
            <h4 style={{ color: '#0369a1', marginBottom: '0.5rem' }}>Read</h4>
            <code className="code-light" style={{ color: '#0c4a6e' }}>SELECT</code>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #fde68a'
          }}>
            <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>Update</h4>
            <code className="code-light" style={{ color: '#78350f' }}>UPDATE</code>
          </div>
          <div style={{ 
            background: '#fef2f2', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '1px solid #fecaca'
          }}>
            <h4 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>Delete</h4>
            <code className="code-light" style={{ color: '#991b1b' }}>DELETE</code>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>💡 Schema:</h3>
      
      <div style={{ 
        background: '#f1f5f9', 
        padding: '1.5rem', 
        borderRadius: '12px',
        borderLeft: '4px solid #3b82f6',
        marginBottom: '2rem'
      }}>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#334155', margin: 0 }}>
          Defines how data is structured (e.g., User has name, email, password).
        </p>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔹 Example MongoDB Query:</h3>
      
      <div style={{ marginBottom: '2rem' }}>
        <SyntaxHighlighter 
          language="javascript" 
          style={vscDarkPlus} 
          customStyle={{ borderRadius: '12px', fontSize: '0.9rem' }}
        >
          {`// Find user by email
User.find({ email: 'suchi@gmail.com' })

// Create new user
const newUser = new User({
  name: 'Suchitra S',
  email: 'suchi@gmail.com',
  password: hashedPassword
});
await newUser.save();

// Update user
User.findByIdAndUpdate(userId, {
  name: 'Updated Name'
});

// Delete user
User.findByIdAndDelete(userId);

// Find with conditions
User.find({ 
  age: { $gte: 18 },
  isActive: true 
}).sort({ createdAt: -1 });`}
        </SyntaxHighlighter>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🗄️ Database Architecture</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '2rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <svg width="100%" height="120" viewBox="0 0 800 120">
          <rect x="20" y="40" width="120" height="40" rx="8" fill="#3b82f6" />
          <text x="80" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Application</text>
          
          <polygon points="140,60 190,60 190,65 140,65" fill="#3b82f6" />
          <rect x="190" y="40" width="100" height="40" rx="8" fill="#10b981" />
          <text x="240" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">ORM/Driver</text>
          
          <polygon points="290,60 340,60 340,65 290,65" fill="#10b981" />
          <rect x="340" y="40" width="120" height="40" rx="8" fill="#f59e0b" />
          <text x="400" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Database</text>
          
          <polygon points="460,60 510,60 510,65 460,65" fill="#f59e0b" />
          <rect x="510" y="40" width="120" height="40" rx="8" fill="#8b5cf6" />
          <text x="570" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Storage</text>
        </svg>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '1rem',
          fontSize: '0.9rem',
          color: '#64748b'
        }}>
          <span>1. App Layer</span>
          <span>2. Data Access</span>
          <span>3. Database</span>
          <span>4. Storage</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Databases; 