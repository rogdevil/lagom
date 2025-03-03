import { Route, Routes } from 'react-router';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
