import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar/Navbar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const { register, handleSubmit ,reset} = useForm();
  const axiosPublic = useAxiosPublic();
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [selectedType,setSelectedType] = useState("default")
  const { user } = useAuth();

  
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const productInfo = {
        productName: data?.name,
        productImage: res.data.data.display_url,
        productionPrice: data?.price,
   
      
        productPrice:
          parseFloat(data?.price) ,
         
        productDetails: data?.details,
      
        productBrand: data.category,
        productRating: parseFloat(data.rating),
        productType: data.type,
        email: user?.email,
        createdAt: new Date(),
        popularity: 0,
      };

      const productRes = await axiosPublic.post("/products", productInfo);

      if (productRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added in the products list!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };


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
    
      
      <h1 className="text-4xl font-bold text-center mt-4">Add Your Product</h1>
      
    </div>
    <div className="card  md:w-[700px]">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
       

        <div className="form-control">
          
          <input
            type="text"
            name="name"
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
            {...register("details", { required: true })}
            className="p-4 text-black text-xl mt-4 "
          />
          
        </div>
        <div className="form-control mt-6 ">
                
                  <select
                    defaultValue="default"
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
                  defaultValue="default"
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
            {...register("rating", { required: true })}
            className="p-4 text-black text-xl mt-4 "
          />
          
        </div>

        <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  required
                  type="file"
                  className="file-input file-input-bordered file-input-green text-black w-full "
                />
              </div>
      

      





        <div className="form-control mt-6 ">
          <input
            className="btn btn-warning text-xl h-16 hover:text-white hover:bg-black"
            type="submit"
            value="Add Product"
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

export default AddProduct;
