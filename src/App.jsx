import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Stock from './Pages/Stock'
import Location from './Pages/Location'
import Header from './Components/Layout/Header'
import Footer from "./Components/Layout/Footer";



function App() {

  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer/>

      
    </>
  )
}

export default App
