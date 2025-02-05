import Page2 from './Templates/Page2-start';
import Page2Suite from './Templates/Page2-suite';
import Login from './Templates/Login';
import Signup from './Templates/Signup';
import { BrowserRouter as Router,HashRouter, Route, Routes } from 'react-router-dom';
import './Style/App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page2 />} />
          <Route path="/Page3" element={<Page2Suite />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
