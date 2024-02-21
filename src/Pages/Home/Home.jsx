import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Policy from "../../components/Policy/Policy";
import Slider from "../../components/AllCategorySlider/Slider";


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
   </div>

    </div>

  );
};

export default Home;