import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { RequestCard } from './components/RequestCard';
import { Form } from './components/Form';
import { ImgMarquee } from './components/ImgMarquee';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RequestCard />
      <ImgMarquee />
      <Footer />
    </div>
  );
}

export default App;
