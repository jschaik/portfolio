import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navigation from './pages/Navigation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='/portfolio/home' element={<Home />} />
            <Route path='/portfolio/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
