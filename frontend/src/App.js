import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { RequestCard } from './components/RequestCard';
import { Form } from './components/Form';
import { ImgMarquee } from './components/ImgMarquee';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <RequestCard />
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
        <ImgMarquee />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
