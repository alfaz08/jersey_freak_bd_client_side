import Typewriter from 'typewriter-effect';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data)=>{
    const { email, password, image, accountType } = data;
  
      console.log( email, password, image, accountType);
  }



  return (
    <div className="grid grid-cols-1   ">
   
      <div
        className="hero min-h-screen text-white "
        style={{ backgroundImage: "url(https://i.ibb.co/Ssc99dd/img-3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-30  flex justify-center items-center">
          
        <div className="flex justify-center items-center ">


    
<div className="hero ">
  <div className="hero-content flex-col ">
    <div className=" lg:text-left">
      <h1 className="text-5xl font-bold text-center">Jersey Freak BD</h1>
      <h1 className="text-4xl font-bold text-center mt-4">Login into your account</h1>
      
    </div>
    <div className="card  md:w-[700px]">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
       

        <div className="form-control">
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
            className="p-4 text-black text-xl mt-4 "
          />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="form-control">
    
    
    <input type="password"
     name="password" placeholder="Password" 
     className="p-4 text-black text-xl mt-4 " required />
   
  </div>

      

      





        <div className="form-control mt-6 ">
          <input
            className="btn btn-warning text-xl h-16 hover:text-white hover:bg-black"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <p className="text-center mt-4 mb-4 ">
  <span className="text-xl font-semibold ">Already have an account.Please </span>
  <Link to="/signUp"  className=" font-bold text-blue-600 text-xl hover:text-red-600">Login</Link>
</p>
      <div>
     
    </div>
    </div>
    <SocialLogin></SocialLogin>
  </div>

  
  



</div>


</div>

      
        </div>

  
      </div>




     



       



    </div>
  );
};

export default Login;
