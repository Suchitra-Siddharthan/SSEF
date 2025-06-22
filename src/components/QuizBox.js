import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    question: 'What is the first step in the Request-Response Lifecycle?',
    options: [
      { label: 'A', text: 'Server sends response' },
      { label: 'B', text: 'Client sends request' },
      { label: 'C', text: 'Database interaction' },
      { label: 'D', text: 'Middleware processing' },
    ],
    correct: 'B',
    explanation: 'The lifecycle always starts with the client sending a request to the server.'
  },
  {
    question: 'Which HTTP method is used to create new data in a RESTful API?',
    options: [
      { label: 'A', text: 'GET' },
      { label: 'B', text: 'POST' },
      { label: 'C', text: 'PUT' },
      { label: 'D', text: 'DELETE' },
    ],
    correct: 'B',
    explanation: 'POST is used to create new resources in RESTful APIs.'
  },
  {
    question: 'What does JWT stand for in server-side security?',
    options: [
      { label: 'A', text: 'Java Web Token' },
      { label: 'B', text: 'JavaScript Web Token' },
      { label: 'C', text: 'JSON Web Token' },
      { label: 'D', text: 'JavaScript With Token' },
    ],
    correct: 'C',
    explanation: 'JWT stands for JSON Web Token, a standard for creating access tokens.'
  },
  {
    question: 'Which of these is a NoSQL database?',
    options: [
      { label: 'A', text: 'MySQL' },
      { label: 'B', text: 'PostgreSQL' },
      { label: 'C', text: 'MongoDB' },
      { label: 'D', text: 'SQLite' },
    ],
    correct: 'C',
    explanation: 'MongoDB is a popular NoSQL database, while the others are relational databases.'
  },
  {
    question: 'What is the purpose of middleware in Express.js?',
    options: [
      { label: 'A', text: 'To style web pages' },
      { label: 'B', text: 'To run functions before route handlers' },
      { label: 'C', text: 'To connect to databases' },
      { label: 'D', text: 'To send HTTP responses' },
    ],
    correct: 'B',
    explanation: 'Middleware functions run before the final route handler to process requests.'
  },
  {
    question: 'What is the difference between authentication and authorization?',
    options: [
      { label: 'A', text: 'They are the same thing' },
      { label: 'B', text: 'Auth verifies identity, Authz controls access' },
      { label: 'C', text: 'Auth controls access, Authz verifies identity' },
      { label: 'D', text: 'Auth is for users, Authz is for admins' },
    ],
    correct: 'B',
    explanation: 'Authentication verifies who you are, authorization determines what you can do.'
  },
  {
    question: 'Which CRUD operation does the SQL command UPDATE perform?',
    options: [
      { label: 'A', text: 'Create' },
      { label: 'B', text: 'Read' },
      { label: 'C', text: 'Update' },
      { label: 'D', text: 'Delete' },
    ],
    correct: 'C',
    explanation: 'UPDATE is the SQL command for updating existing data in a database.'
  },
  {
    question: 'What is a RESTful API?',
    options: [
      { label: 'A', text: 'A type of database' },
      { label: 'B', text: 'A standardized way to expose server functionality over HTTP' },
      { label: 'C', text: 'A programming language' },
      { label: 'D', text: 'A web framework' },
    ],
    correct: 'B',
    explanation: 'RESTful APIs provide a standardized way to interact with server-side functionality using HTTP methods.'
  },
];

function QuizBox() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const { question, options, correct, explanation } = questions[current] || {};

  const handleNext = () => {
    if (selected === correct) setScore((s) => s + 1);
    if (current === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrent((prev) => prev + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
  };

  const cardStyle = {
    maxWidth: '520px',
    margin: '2.5rem auto',
    padding: '2.2rem 2rem 2rem 2rem',
    background: '#fafdff',
    borderRadius: '18px',
    boxShadow: '0 6px 32px rgba(30, 42, 80, 0.13)',
    fontFamily: 'Poppins, Arial, sans-serif',
    border: '1.5px solid #e3e8f0',
    minHeight: '420px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const questionStyle = {
    fontWeight: 700,
    fontSize: '1.08rem',
    color: '#1a2233',
    margin: '1.1rem 0 1.1rem 0',
    fontFamily: 'Montserrat, Arial, sans-serif',
  };

  const optionBtn = (isSelected) => ({
    width: '100%',
    padding: '0.65rem 1rem',
    margin: '0.4rem 0',
    borderRadius: '10px',
    border: isSelected ? '2.5px solid #3b82f6' : '1.5px solid #dbeafe',
    background: isSelected ? '#e0edff' : '#fff',
    color: '#1a2233',
    fontWeight: 600,
    fontSize: '1rem',
    textAlign: 'left',
    cursor: selected ? 'not-allowed' : 'pointer',
    transition: 'all 0.18s',
    outline: isSelected ? '2px solid #3b82f6' : 'none',
    boxShadow: isSelected ? '0 2px 8px #3b82f633' : 'none',
    fontFamily: 'Poppins, Arial, sans-serif',
  });

  const nextBtnStyle = {
    marginTop: '1.5rem',
    padding: '0.65rem 1.5rem',
    background: selected ? '#3b82f6' : '#b6c6e3',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: selected ? 'pointer' : 'not-allowed',
    opacity: selected ? 1 : 0.7,
    transition: 'background 0.2s',
    boxShadow: selected ? '0 2px 12px #3b82f644' : 'none',
    fontFamily: 'Montserrat, Arial, sans-serif',
    letterSpacing: '0.01em',
  };

  const feedbackStyle = (isCorrect) => ({
    marginTop: '1.1rem',
    fontWeight: 700,
    fontSize: '1rem',
    color: isCorrect ? '#22c55e' : '#ef4444',
    background: isCorrect ? '#e7fbe9' : '#fff1f2',
    borderRadius: '8px',
    padding: '0.6rem 0.9rem',
    textAlign: 'center',
    boxShadow: '0 1px 6px #0001',
    fontFamily: 'Poppins, Arial, sans-serif',
  });

  if (showScore) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={cardStyle}
      >
        <h2 style={{color:'#1a2233',marginBottom:'1.5rem',fontFamily:'Montserrat'}}>🎉 Quiz Complete!</h2>
        <div style={{fontSize:'1.2rem',fontWeight:'bold',marginBottom:'1.2rem'}}>Your Score: {score} / {questions.length}</div>
        <button
          onClick={handleRestart}
          style={{
            marginTop:'1rem',
            padding:'0.7rem 2rem',
            background:'#3b82f6',
            color:'#fff',
            border:'none',
            borderRadius:'8px',
            fontWeight:'bold',
            fontSize:'1.08rem',
            cursor:'pointer',
            transition:'background 0.2s',
            boxShadow:'0 2px 12px #3b82f644',
            fontFamily:'Montserrat, Arial, sans-serif',
          }}
        >
          Restart Quiz
        </button>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={cardStyle}
    >
      <h2 style={{display:'flex',alignItems:'center',gap:'0.5rem',color:'#1a2233',fontFamily:'Montserrat',fontWeight:800,fontSize:'1.5rem',marginBottom:'0.7rem'}}><span role="img" aria-label="quiz">🧠</span> Test Your Server-Side IQ!</h2>
      <div style={{marginBottom:'0.7rem',color:'#1a2233',fontWeight:'500',fontSize:'1.02rem'}}>Question {current+1} of {questions.length}</div>
      <div style={questionStyle}>{question}</div>
      <ul style={{listStyle:'none',padding:0,margin:0}}>
        {options.map(opt => (
          <li key={opt.label} style={{margin:'0.5rem 0'}}>
            <button
              style={optionBtn(selected === opt.label)}
              onClick={()=>setSelected(opt.label)}
              disabled={selected!==null}
            >
              {opt.label}) {opt.text}
            </button>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {selected && (
          <motion.div
            key="feedback"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={feedbackStyle(selected === correct)}
          >
            {selected===correct ? `✅ Correct! ${explanation}` : `❌ Incorrect. ${explanation}`}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleNext}
        disabled={!selected}
        style={nextBtnStyle}
      >
        {current === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </motion.section>
  );
}

export default QuizBox; 