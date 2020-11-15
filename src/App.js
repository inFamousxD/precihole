import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

// import {Row, Col} from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
        <Navigation />
        <Dashboard />
        <Footer />
    </React.Fragment>
  );
}

export default App;
