import { useForm } from "react-hook-form";
import useSingleProduct from "../../hooks/useSingleProduct";
import Swal from "sweetalert2";
import Rating from "react-rating-stars-component";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [singleProduct] = useSingleProduct();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic =useAxiosPublic()
  const {user} = useAuth()
  const navigate = useNavigate()
  const [selectedSize,setSelectedSize] = useState("default")
  console.log("single", singleProduct);

  const onSubmit = async (data) => {
    const orderInfo = {
      productName: singleProduct.productName,
      productImage: singleProduct.productImage,
      productPrice:parseFloat(singleProduct.productPrice) ,
       productSize: data?.size,
      productBrand: singleProduct.productBrand,
      
      productType: singleProduct.productType,
      email: user?.email,
      createdAt: new Date(),
    };
    const orderRes = await axiosPublic.post("/carts", orderInfo);
    if (orderRes.data.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${singleProduct.productName} is added to the cart`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  
  return (
    <div>

      <div>
      <div
        className=""
        style={{
          backgroundImage: "url(https://i.ibb.co/Ssc99dd/img-3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70">
          <Navbar></Navbar>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-2 mt-4 gap-6">
          <div className="md:border md:border-purple-400">
            <img
              className="h-[250px] md:h-[500px] w-full"
              src={singleProduct.productImage}
              alt=""
            />
          </div>

          {
            user ?
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div>
              <h1 className="font-bold text-xl">
                Product Name:{singleProduct.productName}
              </h1>
              <h1 className="font-bold text-xl mt-4">
                Brand Name: {singleProduct.productBrand}
              </h1>

              <h2 className="font-bold text-xl mt-4 ">
                Product Type: {singleProduct.productType}
              </h2>

              <h2 className="font-bold text-xl mt-4">
                Price: $ {singleProduct.productPrice}
              </h2>

              <div className="flex">
                <h2 className="font-bold mt-2">Rating :</h2>
                <Rating
                  count={5}
                  value={singleProduct.productRating}
                  edit={false}
                  size={24}
                  activeColor="#b182e3"
                />
              </div>


              


              <h2 className=" text-xl mt-4">
                About Product: {singleProduct.productDetails}
              </h2>
              

              

              <div className="bg-purple-400 flex justify-between items-center sm:w-[200px] md:w-[400px] h-[100px] rounded-lg mt-4">
                <div>
                  <h2 className="ml-2 font-bold">
                    ENJOY EXCLUSIVE <br />
                    OFFERS & DISCOUNT
                  </h2>
                </div>
                <div>
                  <h2 className="mr-2 font-bold">Purchase</h2>
                </div>
              </div>
              <div></div>

              <div>
                <div></div>


                <div className="form-control mt-6 ">
                
                <select
                  defaultValue="default"
                  {...register("size", { required: true })}
                  required
                  className="select select-bordered border-purple-400 max-w-max  text-black w-full"
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option disabled value="default">
                    Select a Jersey Size
                  </option>
                  <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">Xl</option>
                <option value="xxl">XXL</option>
                  
                 
                </select>
              </div>
               

                <div className="form-control mt-6 max-w-max">
          <input
            className="btn btn-warning text-xl h-14 hover:text-white hover:bg-black"
            type="submit"
            value="Add Product"
          />
        </div>
              </div>
            </div>
          </form>
          :
          <form  className="card-body ">
            <div>
              <h1 className="font-bold text-xl">
                Product Name:{singleProduct.productName}
              </h1>
              <h1 className="font-bold text-xl mt-4">
                Brand Name: {singleProduct.productBrand}
              </h1>

              <h2 className="font-bold text-xl mt-4 ">
                Product Type: {singleProduct.productType}
              </h2>

              <h2 className="font-bold text-xl mt-4">
                Price: $ {singleProduct.productPrice}
              </h2>

              <div className="flex">
                <h2 className="font-bold mt-2">Rating :</h2>
                <Rating
                  count={5}
                  value={singleProduct.productRating}
                  edit={false}
                  size={24}
                  activeColor="#b182e3"
                />
              </div>


              


              <h2 className=" text-xl mt-4">
                About Product: {singleProduct.productDetails}
              </h2>
              

              

              <div className="bg-purple-400 flex justify-between items-center sm:w-[200px] md:w-[400px] h-[100px] rounded-lg mt-4">
                <div>
                  <h2 className="ml-2 font-bold">
                    ENJOY EXCLUSIVE <br />
                    OFFERS & DISCOUNT
                  </h2>
                </div>
                <div>
                  <h2 className="mr-2 font-bold">Purchase</h2>
                </div>
              </div>
              <div></div>

              <div>
                <div></div>


                <div className="form-control mt-6 ">
                
                <select
                  defaultValue="default"
                  {...register("size", { required: true })}
                  required
                  className="select select-bordered border-purple-400 max-w-max  text-black w-full"
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option disabled value="default">
                    Select a Jersey Size
                  </option>
                  <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">Xl</option>
                <option value="xxl">XXL</option>
                  
                 
                </select>
              </div>
               

               <Link to="/login">
               <div className="form-control mt-6 max-w-max">
          <input
            className="btn btn-warning text-xl h-14 hover:text-white hover:bg-black"
            type="submit"
          
            value="Add Product"
          />
        </div>
               </Link>
              </div>
            </div>
          </form>
          }
        </div>
      </div>
      </div>
      


    </div>
  );
};

export default ProductDetails;
