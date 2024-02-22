import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Policy from "../../components/Policy/Policy";
import Slider from "../../components/AllCategorySlider/Slider";
import Footer from "../../components/Footer/Footer";
import NewArrival from "../../components/NewArrival/NewArrival";


const Home = () => {
  return (
    <div >
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/RTwKhfx/PW-banner-870x450.jpg)'}}>
  <div className="hero-overlay bg-opacity-70">
  <Navbar></Navbar>
  <Hero></Hero>
  </div>


  
</div>
   <div className="container mx-auto">
    <Policy></Policy>
    <Slider></Slider>
    <NewArrival></NewArrival>
   </div>

<Footer></Footer>
    </div>

  );
};

export default Home;