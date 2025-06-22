import React from 'react';
import { motion } from 'framer-motion';

function RequestResponseLifecycle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
    >
      <h2 style={{ color: '#1a2233', marginBottom: '1.5rem', fontSize: '2rem' }}>
        🔁 Request–Response Lifecycle
      </h2>
      
      <div style={{ 
        background: '#f8fafc', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginBottom: '2rem',
        border: '1px solid #e2e8f0'
      }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#334155' }}>
          Every server-side interaction begins with a request and ends with a response. This lifecycle forms the heartbeat of all backend systems.
        </p>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔎 What Happens?</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        textAlign: 'left',
        marginBottom: '2rem'
      }}>
        <ol style={{ fontSize: '1rem', lineHeight: '1.8', color: '#334155' }}>
          <li><strong>Client sends request:</strong> A browser or frontend app sends an HTTP request to the server.</li>
          <li><strong>Routing identifies path:</strong> The server matches the request URL and method to a route.</li>
          <li><strong>Middleware processes it:</strong> Functions like auth or logging run.</li>
          <li><strong>Controller logic runs:</strong> Business logic is executed.</li>
          <li><strong>Database interaction</strong> (if needed).</li>
          <li><strong>Server sends response:</strong> Response goes back to the client (HTML, JSON, error).</li>
        </ol>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔄 Visual Flow</h3>
      
      <div style={{ 
        background: '#fff', 
        padding: '2rem', 
        borderRadius: '12px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <svg width="100%" height="120" viewBox="0 0 800 120">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#3b82f6',stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#1d4ed8',stopOpacity:1}} />
            </linearGradient>
          </defs>
          
          <rect x="20" y="40" width="100" height="40" rx="8" fill="url(#grad1)" />
          <text x="70" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Client</text>
          
          <polygon points="120,60 170,60 170,65 120,65" fill="#3b82f6" />
          <rect x="170" y="40" width="120" height="40" rx="8" fill="#10b981" />
          <text x="230" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Server</text>
          
          <polygon points="290,60 340,60 340,65 290,65" fill="#10b981" />
          <rect x="340" y="40" width="120" height="40" rx="8" fill="#f59e0b" />
          <text x="400" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Database</text>
          
          <polygon points="460,60 510,60 510,65 460,65" fill="#f59e0b" />
          <rect x="510" y="40" width="120" height="40" rx="8" fill="#ef4444" />
          <text x="570" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Response</text>
          
          <polygon points="630,60 680,60 680,65 630,65" fill="#ef4444" />
          <rect x="680" y="40" width="80" height="40" rx="8" fill="url(#grad1)" />
          <text x="720" y="65" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Client</text>
        </svg>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '1rem',
          fontSize: '0.9rem',
          color: '#64748b'
        }}>
          <span>1. Request</span>
          <span>2. Process</span>
          <span>3. Database</span>
          <span>4. Response</span>
        </div>
      </div>

      <h3 style={{ color: '#1a2233', marginBottom: '1rem' }}>🔹 Example:</h3>
      
      <div style={{ 
        background: '#f1f5f9', 
        padding: '1.5rem', 
        borderRadius: '12px',
        borderLeft: '4px solid #3b82f6'
      }}>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#334155', margin: 0 }}>
          <strong>User submits login form</strong> → server receives credentials → checks database → responds with login success or failure message.
        </p>
      </div>
    </motion.div>
  );
}

export default RequestResponseLifecycle; 