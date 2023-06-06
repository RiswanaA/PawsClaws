import Home from './components/Home';
import Otp from './components/Otp';
import Basic from './components/Basic';
import Service from './components/Service';
import Welcome from './components/Welcome';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/otp' element={<Otp />} />
          <Route exact path='/basic-details' element={<Basic />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/welcome' element={<Welcome />} />


        </Routes>

      </Router>

    </>


  );
}

export default App;
