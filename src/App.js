
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Navbar from './pages/Navigation/Navbar';
import Creators from './pages/Creators/Creators';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/creators' element={<Creators/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
