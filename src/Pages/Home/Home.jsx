import Collection from "../../components/Collection/Collection";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Policy from "../../components/Policy/Policy";


const Home = () => {
  return (
    <div >
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/RTwKhfx/PW-banner-870x450.jpg)'}}>
  <div className="hero-overlay bg-opacity-70">
  <Navbar></Navbar>
  <Hero></Hero>
  </div>


  
</div>
   <div>
    <Policy></Policy>
    <Collection></Collection>
   </div>

    </div>

  );
};

export default Home;