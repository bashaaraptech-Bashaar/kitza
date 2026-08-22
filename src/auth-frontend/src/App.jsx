import { Route, Routes } from "react-router-dom"
import Home from './components/home';
import Login from "./components/login";
import Register from "./components/register";
import End from "./components/end";

function App() {
  return  (
     <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
         <Route path="/end" element={<End/>} />
      </Routes>
  )
  
}

export default App;