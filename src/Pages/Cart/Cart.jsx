import Navbar from "../../components/Navbar/Navbar";
import useCart from "../../hooks/useCart";
import CartDetailsItem from "./CartDetailsItem";


const Cart = () => {

  const [cart] =useCart()
  console.log('cart',cart);

  const totalPrice =cart.reduce((total,item)=>total+item.productPrice,0)
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
      {
        cart.map(item=>
          <CartDetailsItem key={item._id} item={item}  ></CartDetailsItem>
          )
      }

     <div className="flex justify-between gap-6 mt-4 mb-4">

     <div className="flex justify-start gap-6">
     <h2 className="text-3xl font-bold">
        Total Price : 
      </h2>

      <h2 className="text-3xl font-bold">
        $ {totalPrice}
      </h2>
     </div>

      <div>
        <button className="btn btn-warning hover:text-white hover:bg-black"> proceed to checkout</button>
      </div>

     </div>

     </div>
      


    </div>
  );
};

export default Cart;