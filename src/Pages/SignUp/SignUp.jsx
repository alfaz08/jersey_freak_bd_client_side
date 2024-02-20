import Typewriter from 'typewriter-effect';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data)=>{
    const { name, email, password, image, accountType } = data;
  
      console.log(name, email, password, image, accountType);
  }



  return (
    <div className="grid grid-cols-1 md:grid-cols-2  ">
   
      <div
        className="hero min-h-screen text-white hidden md:block"
        style={{ backgroundImage: "url(https://i.ibb.co/Ssc99dd/img-3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-30  flex justify-center items-center">
          <div className="">
          <h2 className="text-4xl mt-2 md:text-4xl  font-bold">
          <span style={{ }}>
            <Typewriter
              options={{
                strings: ["WELCOME TO JERSEY FREAK BD" ],
                autoStart: true,
                loop: true,
                
              }}
            />
              </span>
          </h2>
          <h2 className='mt-4 text-xl'>Welcome to our diverse online jersey marketplace, where enthusiasts 
          of all ages can explore<br /> and purchase a wide array of
          jerseys from various renowned brands. We provide a seamless <br /> shopping experience, ensuring that every customer finds the perfect 
          jersey to suit their <br />preferences and showcase their team spirit

          </h2>

          <h2 className='flex mt-4 justify-center items-center gap-6'>
          <FaFacebook className=" text-4xl  " />
            <AiFillInstagram className="text-4xl"/>
            <IoLogoYoutube className="text-4xl"/>

            <AiFillTwitterCircle className="text-4xl"/>
          </h2>
          </div>
      
        </div>

  
      </div>




      <div className="flex justify-center items-center bg-base-300">


    
      <div className="hero ">
        <div className="hero-content flex-col ">
          <div className=" lg:text-left">
            <h1 className="text-5xl font-bold text-center">Jersey Freak BD</h1>
            <h1 className="text-4xl font-bold text-center mt-4">Create an account</h1>
            
          </div>
          <div className="card  md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
               
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder=" Full Name"
                  className="p-4 text-black text-xl "
                />
               
              </div>

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
             
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="p-4 text-black text-xl mt-4"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password less than 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one upper case one lower case one number
                    one special charcter
                  </span>
                )}
              </div>

              <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  required
                  type="file"
                  className="file-input file-input-bordered file-input-green w-full "
                />
              </div>

            





              <div className="form-control mt-6 ">
                <input
                  className="btn btn-warning text-xl h-16 hover:text-white hover:bg-black"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mt-4 mb-4 ">
        <span className="text-xl font-semibold ">Already have an account.Please </span>
        <Link to="/login"  className=" font-bold text-blue-600 text-xl hover:text-red-600">Login</Link>
      </p>
            <div>
           
          </div>
          </div>
          <SocialLogin></SocialLogin>
        </div>

        
        



      </div>

      
      </div>



       



    </div>
  );
};

export default SignUp;
