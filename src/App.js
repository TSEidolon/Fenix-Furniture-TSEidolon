import {ParallaxProvider} from 'react-scroll-parallax';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home'
import Detail from './pages/detail'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


 
  return (
    <BrowserRouter >
    <ParallaxProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/> 
          <Route path='/:slug' element={<Detail />}/> 
        </Route>
      </Routes>
    </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
