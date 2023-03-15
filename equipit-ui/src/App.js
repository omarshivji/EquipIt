import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import nav from './components/navbar.jsx';
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import Contact from './pages/contact.jsx';


const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Route path="/" index>
        <Home />
      </Route>
      <Route path="/about" element={<About />} /> {/* Make sure to render the About component */}
    </Router>
  );
};

export default App;
