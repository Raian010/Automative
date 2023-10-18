import Banner from "./Banner";
import Brands from "./Description/Home/Brands/Brands";
import Faq from "./Description/Home/FAQ";
import Services from "./Description/Home/Services";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Services></Services>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;