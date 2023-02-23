import SideNave from './components/SideNave';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Products from './pages/Products';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />}></Route>
        <Route path='/dashboard' exact element={<Home />}></Route>
        <Route path='/about' exact element={<About />} ></Route>
        <Route path='/settings' exact element={<Settings />} ></Route>
        <Route path='/products' exact element={<Products />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
