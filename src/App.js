import SideNave from './components/SideNave';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Products from './pages/Products';
import Login from './components/Login';
import ProjectTable from './pages/ProjectTable';
import AddProject from './pages/project/AddProject';
import EditProject from './pages/project/EditProject';
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

function App() {
  return (
<BrowserRouter history={createBrowserHistory()}>
      <Routes>
        <Route path='/' exact element={<Login />}></Route>
        <Route path='/dashboard' exact element={<Home />}></Route>
        <Route path='/about' exact element={<About />} ></Route>
        <Route path='/settings' exact element={<Settings />} ></Route>
        <Route path='/products' exact element={<Products />} ></Route>
        <Route path='/projects' exact element={<ProjectTable />} ></Route>
        <Route path='/addProject' exact element={<AddProject />} ></Route>
        <Route path='/editProject' exact element={<EditProject />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
