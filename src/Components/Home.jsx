import { useState } from "react";
import Banner from "./Banner";
import Brands from "./Description/Home/Brands/Brands";
import Faq from "./Description/Home/FAQ";
import Services from "./Description/Home/Services";
import Footer from "./Footer";
import "./Home.css";
import { FaToggleOff,FaToggleOn } from "react-icons/fa";
// import "/dark.css";


const Home = () => {
    const [dark,setDark] = useState(false);
    const mode = dark ? "dark-mode" : "light-mode";
    return (
        <div className={mode}>
            <button className="text-2xl" onClick={() => setDark(!dark)} >{dark ? <FaToggleOn className=" bg-white"></FaToggleOn> : <FaToggleOff></FaToggleOff>}</button>
            <Banner></Banner>
            <Brands></Brands>
            <Services></Services>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;