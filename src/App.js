import './App.css';
import { BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Sobre from './components/pages/Sobre';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
   <Router>
    <Navbar/>
    <Container customClass='min-height'>
      <Routes>
      <Route path="/PersonalGustavo/" element={<Home />}> </Route>
      <Route path="/contact" element={<Contact />}> </Route>
      <Route path="/sobre" element={<Sobre />}> </Route>
      </Routes>
    </Container>
        <Footer/>
   </Router>
  );
}

export default App;
