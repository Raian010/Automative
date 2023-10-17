import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
// import Banner from "./Components/Banner"


function App() {


  return (
    <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        {/* <Banner></Banner> */}
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default App
