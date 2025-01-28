import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import CardsDetail from './components/CardsDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/data/:slug" element={<CardsDetail />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
