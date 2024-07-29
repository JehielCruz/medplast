import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom"
import { Home } from './Components/pages/Home'
import { About } from './Components/pages/About'
import { Product } from './Components/pages/Product'
import { Header } from './Components/layouts/Header'
function App() {

  return (
    <Router>
       <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
