import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import AboutActor from './components/AboutActor';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <>
    <Header/>
      <Router>
      <Routes>
        {/* Routes to the Home Component */}
        <Route exact path="/" element={<Home />} />
        {/* Routes to the Actor detail page component */}
        <Route path="/about/:actorId" element={<AboutActor />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      </Router>
    <Footer/>

  </>
  );
}

export default App;
