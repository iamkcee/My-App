import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from "./components/Nav"
import DetailPage from './pages/DetailPage'
import MyHook from './hooks/MyHook'
import FetchData from './hooks/FetchData'
import NotFoundPage from './pages/404Page'
import Login from './pages/Login'
import Register from './pages/Register'



function App() {

  return (
    <>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/product/:id" element={<DetailPage/>}/>
        <Route path="/hook" element={<MyHook/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path="/blog" element={<FetchData/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App