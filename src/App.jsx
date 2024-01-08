import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Success from './pages/Success'
import Checkout from './components/Checkout'

function App() {
  
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/success' element={<Success/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
