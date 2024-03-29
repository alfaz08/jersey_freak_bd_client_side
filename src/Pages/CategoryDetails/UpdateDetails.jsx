import React, { useState } from 'react';
import useSingleProduct from '../../hooks/useSingleProduct';
import { useForm } from "react-hook-form";
import Navbar from '../../components/Navbar/Navbar';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const UpdateDetails = () => {

  const [singleProduct] = useSingleProduct()
  const axiosPublic =useAxiosPublic()
  console.log(singleProduct);
  const navigate = useNavigate()
  const {user}=useAuth()
  const { register, handleSubmit ,reset} = useForm();
  const [selectedCategory, setSelectedCategory] = useState(singleProduct?.productCategory);
  const [selectedType,setSelectedType] = useState(singleProduct?.productType)
  
  const onSubmit = async (data) => {
    
   
    
   
      const updateInfo = {
        productName: data?.name,
       
        productionPrice: data?.price,
   
      
        productPrice:
          parseFloat(data?.price) ,
         
        productDetails: data?.details,
      
        productBrand: data.category,
        productRating: parseFloat(data.rating),
        productType: data.type,
        email: user?.email,
       
      };

      const patchRes = await axiosPublic.patch(`/updateProduct/${singleProduct._id}`, updateInfo);

      if (patchRes.data?.modifiedCount) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your product ${data.name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate('/')
    


  }


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



<div className="container mx-auto">

<div
        className="hero min-h-screen text-white "
        style={{ backgroundImage: "url(https://i.ibb.co/Ssc99dd/img-3.jpg)" }}
      >
          
        <div className="hero-overlay bg-opacity-30  flex justify-center items-center">
        
        
        
        <div className="flex justify-center items-center ">


    
<div className="hero ">
  <div className="hero-content flex-col ">
    <div className=" lg:text-left">
    
      
      <h1 className="text-4xl font-bold text-center mt-4">Update Your Product</h1>
      
    </div>
    <div className="card  md:w-[700px]">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
       

        <div className="form-control">
          
          <input
            type="text"
            name="name"
            defaultValue={singleProduct?.productName}
            placeholder="Product Name"
            {...register("name", { required: true })}
            className="p-4 text-black text-xl mt-4 "
          />
          
        </div>
        <div className="form-control">
          
          <input
            type="text"
            name="details"
            placeholder="Product Details"
            defaultValue={singleProduct?.productDetails}
            {...register("details", { required: true })}
            className="p-4 text-black text-xl mt-4 "
          />
          
        </div>
        <div className="form-control mt-6 ">
                
                  <select
                    defaultValue={singleProduct?.productType}
                    {...register("type", { required: true })}
                    required
                    className="select select-bordered  text-black w-full"
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option disabled value="default">
                      Select a Product Type
                    </option>
                    <option value="full sleeve">Full Sleeve</option>
                    <option value="half sleeve">Half Sleeve</option>
                    <option value="jacket">Jacket</option>
                    
                   
                  </select>
                </div>

                <div className="form-control mt-6 ">
                
                <select
                  defaultValue={singleProduct?.productCategory}
                  {...register("category", { required: true })}
                  required
                  className="select select-bordered  text-black w-full"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option disabled value="default">
                    Select a Brand Category
                  </option>
                  <option value="addidas">Addidas</option>
                  <option value="nike">Nike</option>
                  <option value="kappa">Kappa</option>
                  <option value="puma">puma</option>
                  <option value="new balance">New Balance</option>
                 
                </select>
              </div>

        <div className="form-control">
          
          <input
            type="number"
            name="price"
            defaultValue={singleProduct?.productPrice}
            placeholder="Product Price"
            {...register("price", { required: true })}
            className="p-4 text-black text-xl mt-4 "
          />
          
        </div>


        <div className="form-control">
          
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            defaultValue={singleProduct?.productRating}
            {...register("rating", { required: true })}
            className="p-4 text-black text-xl mt-4 "
          />
          
        </div>

      

       





        <div className="form-control mt-6 ">
          <input
            className="btn btn-warning text-xl h-16 hover:text-white hover:bg-black"
            type="submit"
            value="Update Product"
          />
        </div>
      </form>
     
      <div>
     
    </div>
    </div>
   
  </div>

  
  



</div>


</div>

      
        </div>
        
  
      </div>

</div>
    </div>
  );
};

export default UpdateDetails;