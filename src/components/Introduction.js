import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'left' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          color: '#000'
        }}>
          🧑‍💻 Introduction 
        </h1>
        
        <div style={{
          background: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
          padding: '2rem',
          borderRadius: '16px',
          marginBottom: '2rem',
          textAlign: 'left',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.7', 
            color: '#fff',
            margin: 0,
            fontWeight: '400'
          }}>
            Server-side engineering is the backbone of modern web applications. While the client side handles what the user sees and interacts with (UI/UX), the server side handles all the powerful logic, secure data processing, and communication with databases that make websites and apps truly dynamic.
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: '1.6', 
            color: '#0c4a6e',
            margin: 0,
            fontStyle: 'italic'
          }}>
            💡 <strong>Did you know?</strong> Whether you're logging in, uploading a photo, making a purchase, or fetching your notifications — you're using server-side technologies every time.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '1.5rem',
          color: '#1e293b'
        }}>
          🎯 Why Learn Server-Side Engineering?
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          {[
            { icon: '🌐', title: 'Build Scalable Apps', desc: 'Create web applications that can handle thousands of users simultaneously' },
            { icon: '🔒', title: 'Secure Data & Auth', desc: 'Protect user data and enforce permissions with robust authentication systems' },
            { icon: '🧠', title: 'Complex Logic', desc: 'Handle sophisticated business logic and integrate with multiple databases' },
            { icon: '💬', title: 'API Communication', desc: 'Enable seamless frontend-backend communication through RESTful APIs' },
            { icon: '🚀', title: 'High Performance', desc: 'Support large user bases and high-speed data exchange with optimized code' },
            { icon: '🛡️', title: 'Data Protection', desc: 'Implement security best practices to safeguard sensitive information' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              style={{
                background: 'white',
                padding: '1.2rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h4 style={{ 
                fontSize: '1.1rem', 
                margin: '0 0 0.5rem 0',
                color: '#1e293b'
              }}>{item.title}</h4>
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#6b7280',
                margin: 0,
                lineHeight: '1.5'
              }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '1.5rem',
          color: '#1e293b'
        }}>
          🧱 Core Server-Side Concepts You'll Explore
        </h2>
        
        <p style={{ 
          fontSize: '1rem', 
          lineHeight: '1.6', 
          color: '#374151',
          marginBottom: '1.5rem'
        }}>
          Here's a comprehensive overview of the key concepts this learning platform will teach you:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2.5rem'
        }}>
          {[
            {
              title: 'Request–Response Lifecycle',
              desc: 'Understand how every user action flows through the server and back to the client, from HTTP requests to database queries.',
              color: '#dbeafe'
            },
            {
              title: 'Routing',
              desc: 'Learn how URLs are handled by the server to perform specific actions like showing content, updating data, or deleting records.',
              color: '#fef3c7'
            },
            {
              title: 'Authentication & Authorization',
              desc: 'Master the difference between verifying a user\'s identity and managing their permissions across different parts of your application.',
              color: '#fce7f3'
            },
            {
              title: 'Databases & Data Persistence',
              desc: 'Discover how data is stored, updated, and retrieved using modern databases and ORM technologies.',
              color: '#dcfce7'
            },
            {
              title: 'RESTful APIs',
              desc: 'Dive into how frontend apps communicate with the backend using HTTP methods, endpoints, and JSON data exchange.',
              color: '#f3e8ff'
            },
            {
              title: 'Middleware',
              desc: 'Learn how server-side logic is extended using middleware functions that sit between the request and the route handler.',
              color: '#fef2f2'
            }
          ].map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              style={{
                background: concept.color,
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 style={{ 
                fontSize: '1.2rem', 
                margin: '0 0 0.8rem 0',
                color: '#1e293b'
              }}>{concept.title}</h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#374151',
                margin: 0,
                lineHeight: '1.6'
              }}>{concept.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '1.5rem',
          color: '#1e293b'
        }}>
          🛠️ Technologies You'll See Referenced
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{ 
              fontSize: '1.1rem', 
              margin: '0 0 1rem 0',
              color: '#1e293b'
            }}>💻 Programming Languages</h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              color: '#6b7280'
            }}>
              <li style={{ marginBottom: '0.3rem' }}>• JavaScript (Node.js)</li>
              <li style={{ marginBottom: '0.3rem' }}>• Python</li>
              <li style={{ marginBottom: '0.3rem' }}>• PHP</li>
              <li style={{ marginBottom: '0.3rem' }}>• Ruby</li>
              <li style={{ marginBottom: '0.3rem' }}>• Java</li>
            </ul>
          </div>

          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{ 
              fontSize: '1.1rem', 
              margin: '0 0 1rem 0',
              color: '#1e293b'
            }}>🗄️ Databases</h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              color: '#6b7280'
            }}>
              <li style={{ marginBottom: '0.3rem' }}>• MongoDB</li>
              <li style={{ marginBottom: '0.3rem' }}>• MySQL</li>
              <li style={{ marginBottom: '0.3rem' }}>• PostgreSQL</li>
              <li style={{ marginBottom: '0.3rem' }}>• Redis</li>
              <li style={{ marginBottom: '0.3rem' }}>• SQLite</li>
            </ul>
          </div>

          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{ 
              fontSize: '1.1rem', 
              margin: '0 0 1rem 0',
              color: '#1e293b'
            }}>⚡ Frameworks</h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              color: '#6b7280'
            }}>
              <li style={{ marginBottom: '0.3rem' }}>• Express.js</li>
              <li style={{ marginBottom: '0.3rem' }}>• Django</li>
              <li style={{ marginBottom: '0.3rem' }}>• Flask</li>
              <li style={{ marginBottom: '0.3rem' }}>• FastAPI</li>
              <li style={{ marginBottom: '0.3rem' }}>• Spring Boot</li>
            </ul>
          </div>

          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{ 
              fontSize: '1.1rem', 
              margin: '0 0 1rem 0',
              color: '#1e293b'
            }}>🔧 Tools & Libraries</h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              color: '#6b7280'
            }}>
              <li style={{ marginBottom: '0.3rem' }}>• Postman</li>
              <li style={{ marginBottom: '0.3rem' }}>• JWT</li>
              <li style={{ marginBottom: '0.3rem' }}>• bcrypt</li>
              <li style={{ marginBottom: '0.3rem' }}>• CORS</li>
              <li style={{ marginBottom: '0.3rem' }}>• body-parser</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          background: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
          color: 'white',
          padding: '2rem',
          borderRadius: '16px',
          textAlign: 'center',
          marginTop: '2rem'
        }}
      >
        <h3 style={{ 
          fontSize: '1.4rem', 
          margin: '0 0 1rem 0',
          color: 'white'
        }}>
          🚀 Ready to Start Learning?
        </h3>
        <p style={{ 
          fontSize: '1rem', 
          margin: 0,
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Use the navigation menu on the left to explore each concept in detail. Each section includes practical examples, code snippets, and interactive elements to help you master server-side engineering fundamentals.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Introduction; 