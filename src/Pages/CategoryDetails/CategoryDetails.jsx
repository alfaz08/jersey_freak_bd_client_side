
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Rating from 'react-rating-stars-component';




const CategoryDetails = () => {
 
  const axiosPublic=useAxiosPublic()
 const {category}=useParams()
 console.log(category);
 

  const {data:allProducts=[],refetch}=useQuery({
    queryKey:['allProducts',category],
    queryFn:async()=>{
      const res = await axiosPublic.get(`/products/category?category=${category}`)
      return res.data
    }
   })

   console.log('allProducts',allProducts);


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

     


      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {
        allProducts?.map(product=>(
          <div key={product._id}>
          <h2>
          <div className="card bg-purple-100 shadow-xl">
      <figure><img className="h-80 w-full" src={product.productImage} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">
          Product Name: {product.productName}
          <div className="badge h-12 bg-purple-400 ">
            <span className='text-center font-bold'>{product.productType}</span>
             </div>
        </h2>
        <p></p>
        <div className=" ">
          <h2 className="text-xl font-semibold uppercase">Brand Name: {product.productBrand}</h2>
        </div>
        <div>
        <h2 className="text-xl font-semibold">Price: $ {product.productPrice}</h2>
        </div>
        <div className="flex">
        <h2 className="font-bold mt-2">Rating : </h2>
        <Rating
      count={5} // Number of stars
      value={product.productRating} // The initial rating value
      edit={false} // Read-only
      size={24} // Size of the stars
      activeColor="#b182e3" // Color of the selected stars
    />
        
        
    
        </div>
    
        <div className="flex justify-around">
       <Link to={`/singleProductDetails/${product._id}`}>
       <button className="btn btn-warning font-bold hover:text-white hover:bg-black">Product Details</button>
    
       </Link>
        
        <Link to={`/updateProductDetails/${product._id}`}>
        <button className="btn btn-warning font-bold hover:text-white hover:bg-black">Product Update</button>
        </Link>
       </div>
    
      </div>
       
       
    
    
    
    </div>
          </h2>
        </div>
        ))
      }
      </div>

    </div>
  );
};

export default CategoryDetails;