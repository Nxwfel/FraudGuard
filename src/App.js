import Page1 from './Page1';
import Page2 from './Page2-wrapper';
import Page2Suite from './Page2-suite';
import { BrowserRouter as Router,HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page2Suite />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
