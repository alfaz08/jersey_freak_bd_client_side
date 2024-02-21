import { useParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useSingleProduct = () => {
  const {id}=useParams()
  const axiosPublic =useAxiosPublic()
  const {data:singleProduct=[],refetch}=useQuery({
    queryKey:['singleProduct'],
    queryFn: async ()=>{
      const res = await axiosPublic.get(`/singleProduct/${id}`)
      return res.data
    }
    
  })
  return [singleProduct,refetch]
};

export default useSingleProduct;