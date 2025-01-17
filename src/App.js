import Page1 from './Page1';
import Page2 from './Page2-start';
import Page2Suite from './Page2-suite';
import Login from './login';
import { BrowserRouter as Router,HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/" element={<Page2 />} />
          <Route path="/Page3" element={<Page2Suite />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
