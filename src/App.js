import React from 'react';
import './main.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Sidebar  from './components/sidebar/sidebar';
import Section from './components/section/section';
import Nav from './components/nav/nav';
function App() {
  return (
    <>
      <Sidebar />
      <Section />
      <Nav />
    </>
  );
}

export default App;
