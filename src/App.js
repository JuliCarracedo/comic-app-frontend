
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Navbar from './pages/Navigation/Navbar';
import Creators from './pages/Creators/Creators';
import Categories from './pages/Categories/Categories';
import Comic from './pages/Comic/Comic';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/creators' element={<Creators/>}/>
          <Route exact path='/categories' element={<Categories/>}/>
          <Route exact path='/comic' element={<Comic/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
