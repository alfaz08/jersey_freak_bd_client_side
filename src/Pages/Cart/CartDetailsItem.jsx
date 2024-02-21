import React from 'react';

const CartDetailsItem = ({item}) => {
  return (
    <div>
       <div>
      
      <div className="flex gap-10 mt-4">
 
 <div className="">
   <img className=" h-64 w-80 border border-purple-400" src={item?.productImage} alt="" />
 </div>
 
 <div>
   <h1 className="font-bold text-xl">Product Name: {item?.productName}</h1>
   <h1 className="font-bold text-xl mt-4">Brand Name: {item?.productBrand}</h1>
  
    <h2 className="font-bold text-xl mt-4 ">Product Type: {item?.productType}</h2>
 
    <h2 className="font-bold text-xl mt-4">Price: ${item?.productPrice}</h2>
    
   
    
    <button  className="mt-4 btn btn-warning font-bold hover:text-white hover:bg-black">Remove</button>
 
    
    <div>
     
    </div>
    
    
 
    <div>
     <div>
 
     </div>
    
   
 
 
    </div>
    
    
    
   
 </div>
 
 </div>
 
 <div className="border-t border-gray-400 m-4"></div>
 
     </div>
    </div>
  );
};

export default CartDetailsItem;