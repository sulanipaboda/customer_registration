import './App.css';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { RequestCard } from './components/RequestCard';
import { Form } from './components/Form';
import { ImgMarquee } from './components/ImgMarquee';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
      <div className="App">
      <NavBar />
      <RequestCard />
      <Route path="/form" component={ <Form/> } />
      <ImgMarquee />
      <Footer />
    </div>
    </Routes>  
    </Router>
  )
}

export default App;
