import Navbar from "../../components/Navbar/Navbar";

import { FaLocationDot,FaMobileScreenButton,FaM } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>

      <div
        className=""
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Ssc99dd/img-3.jpg)",
        
        }}
      >
        <div className="hero-overlay bg-opacity-70">
          <Navbar></Navbar>
        </div>
      </div>
 <div className="flex justify-center items-center mt-4 b">
      <div className="card w-[700px] ">
  <figure><img src="https://i.ibb.co/c6yY19P/contactus.webp" alt="car!"/></figure>
  <div className="card-body text-center items-center">
    <h2 className="card-title "> <FaM></FaM> jerseyfreakbd@gmail.com</h2>
    <h2 className="card-title"><FaMobileScreenButton></FaMobileScreenButton> +88012345678</h2>
    <h2 className="card-title"><FaLocationDot></FaLocationDot> Dhaka,Bangladesh</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-warning font-bold">Call Now</button>
    </div>
  </div>
</div>
    </div>

    </div>
  );
};

export default Contact;