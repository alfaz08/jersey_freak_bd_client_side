import React from 'react';
import useSingleProduct from '../../hooks/useSingleProduct';
import Swal from "sweetalert2";
import Rating from 'react-rating-stars-component';
import Navbar from '../../components/Navbar/Navbar';

const ProductDetails = () => {
  const [singleProduct] = useSingleProduct()
 
  console.log('single',singleProduct);
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

          <div className='container mx-auto'>
          <div className="grid grid-cols-2 mt-4 gap-6">

<div className="md:border md:border-purple-400">
  <img className="h-[250px] md:h-[500px] w-full" src={singleProduct.productImage} alt="" />
</div>

<div>
  <h1 className="font-bold text-xl">Product Name:{singleProduct.productName}</h1>
  <h1 className="font-bold text-xl mt-4">Brand Name: {singleProduct.productBrand}</h1>
 
   <h2 className="font-bold text-xl mt-4 ">Product Type: {singleProduct.productType}</h2>

   <h2 className="font-bold text-xl mt-4">Price: $ {singleProduct.productPrice}</h2>
  
   <div className="flex">
<h2 className="font-bold mt-2">Rating : 

</h2>
<Rating
  count={5} 
  value={singleProduct.productRating} 
  edit={false} 
  size={24} 
  activeColor="#b182e3" 
/>

</div>
<h2 className=" text-xl mt-4">About Product: {singleProduct.productDetails}</h2>
   <select name="type" className="input input-bordered mt-4 border-purple-400" required>
            <option value="select type" >
                -- Select Size --
              </option>
              <option value="apparel">M</option>
              <option value="footwear">L</option>
              <option value="accessories">Xl</option>
              <option value="sportswear">XXL</option>
           
            </select>

   <div className="bg-purple-400 flex justify-between items-center sm:w-[200px] md:w-[400px] h-[100px] rounded-lg mt-4">
    <div>
      <h2 className="ml-2 font-bold">ENJOY EXCLUSIVE <br />OFFERS & DISCOUNT</h2>
    </div>
    <div>
      <h2 className="mr-2 font-bold">Purchase</h2>
    </div>
   </div>
   <div>
    
   </div>
   
   

   <div>
    <div>

    </div>
    
    {/* <h2>Add Promo code or voucher</h2>
    <input type="text" placeholder="Type here" className="input input-bordered border-amber-400 input-accent w-full max-w-xs" /> */}
  <div className="md:flex items-center mt-4 sm: w-[50px] md:w-[400px]">
<input
type="text"
className=" px-4 py-2 border border-purple-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
placeholder="Enter Your Coupon Code"
/>
<button 
className="px-4 py-2 bg-purple-400 font-bold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
>
Apply
</button>
</div>

<div>
  
   <button className="btn btn-warning mt-4 font-bold hover:text-white hover:bg-black"> Add to Cart</button>
  
   </div>
   </div>
   
   
   
  
</div>

</div>
          </div>
    </div>
  );
};

export default ProductDetails;