import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import { useState } from "react"

function App() {
  const [dark,setDark] = useState(false);


  return (
    <div className="max-w-7xl mx-auto">
        <Navbar dark={dark} setDark={setDark}></Navbar>
        
        <Outlet></Outlet>
        
    </div>
  )
}

export default App
