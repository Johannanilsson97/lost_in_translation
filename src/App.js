import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './views/Login';
import Profile from './views/Profile';
import Translation from './views/Translation';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <BrowserRouter>   
    <div className="App">

      <Navbar  />

      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/Translation" element={ <Translation /> } />
        <Route path="/Profile" element={ <Profile /> } />
      </Routes>
      
    </div>

    </BrowserRouter>
  );
}

export default App;
