
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useProduct = () => {
  
  const axiosPublic =useAxiosPublic()
  const {data:allProducts=[],refetch}=useQuery({
    queryKey:['allProducts'],
    queryFn: async ()=>{
      const res = await axiosPublic.get(`/products`)
      return res.data
    }
    
  })
  return [allProducts,refetch]
};

export default useProduct;