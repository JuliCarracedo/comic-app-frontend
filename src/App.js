
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Navbar from './pages/Navigation/Navbar';
import Creators from './pages/Creators/Creators';
import Categories from './pages/Categories/Categories';
import Comic from './pages/Comic/Comic';
import User from './pages/User/User';
import Login from './pages/User/Login';
import Register from './pages/User/Register';

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
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
