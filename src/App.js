import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import all components
import Introduction from './components/Introduction';
import RequestResponseLifecycle from './components/RequestResponseLifecycle';
import Routing from './components/Routing';
import Authentication from './components/Authentication';
import Databases from './components/Databases';
import RESTfulAPIs from './components/RESTfulAPIs';
import Middleware from './components/Middleware';
import QuizBox from './components/QuizBox';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  const navigationItems = [
    { id: 'intro', label: 'Introduction', icon: '🏠' },
    { id: 'lifecycle', label: 'Request-Response Lifecycle', icon: '🔄' },
    { id: 'routing', label: 'Routing', icon: '🛣️' },
    { id: 'auth', label: 'Authentication & Authorization', icon: '🔒' },
    { id: 'databases', label: 'Databases & Persistence', icon: '🗄️' },
    { id: 'apis', label: 'RESTful APIs', icon: '🌐' },
    { id: 'middleware', label: 'Middleware', icon: '⚙️' },
    { id: 'quiz', label: 'Quiz', icon: '📝' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return <Introduction />;
      case 'lifecycle':
        return <RequestResponseLifecycle />;
      case 'routing':
        return <Routing />;
      case 'auth':
        return <Authentication />;
      case 'databases':
        return <Databases />;
      case 'apis':
        return <RESTfulAPIs />;
      case 'middleware':
        return <Middleware />;
      case 'quiz':
        return <QuizBox />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="App" style={{ 
      minHeight: '100vh', 
      // background: 'linear-gradient(135deg, #181c24 0%, #232946 100%)',
      fontFamily: 'Poppins, Arial, sans-serif',
      background: '#EEF1F6'
    }}>
      <Header />
      
      <div style={{ 
        display: 'flex', 
        // minHeight: '100%',
        height: 'calc(100vh - 120px)',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1rem',
        marginBottom:'100px'
      }}>
        {/* Left Sidebar Navigation */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            width: '280px',
            background: '#1E293B',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '1.5rem',
            margin: '1rem 0',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            height: '100%',
            position: 'sticky',
            top: '1rem'
          }}
        >
          <h3 style={{
            color: '#e5e7eb',
            fontSize: '1.3rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            textAlign: 'center',
            fontFamily: 'Montserrat, Arial, sans-serif'
          }}>
            📚 Learning Dashboard
          </h3>
          
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveSection(item.id)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      margin: '0.3rem 0',
                      background: activeSection === item.id 
                        ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' 
                        : 'transparent',
                      color: activeSection === item.id ? '#fff' : '#d1d5db',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: activeSection === item.id ? '600' : '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: activeSection === item.id 
                        ? '0 4px 12px rgba(59, 130, 246, 0.3)' 
                        : 'none',
                      fontFamily: 'Poppins, Arial, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                        e.target.style.color = '#fff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#d1d5db';
                      }
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Right Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            flex: 1,
            margin: '1rem 0 1rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            overflow: 'auto',
            maxHeight: 'calc(100vh - 160px)'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{ padding: '2rem' }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
