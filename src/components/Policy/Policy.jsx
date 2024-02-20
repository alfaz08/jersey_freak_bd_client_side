

const Policy = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#fcedda] flex gap-4 text-xl justify-center items-center p-6">
          <div>
            <img src="https://i.ibb.co/wzT2fHP/policy-1-removebg-preview.png" alt="" />
          </div>
          <div>
            <h2 className="font-bold">Free Shipping</h2>
            <h2>Free shipping in all order</h2>
          </div>
        </div>

        <div className="bg-[#f2fbcb] flex  gap-4 text-xl justify-center items-center">
          <div>
            <img src="https://i.ibb.co/nPSFDvC/policy-2-removebg-preview.png" alt="" />
          </div>
          <div>
            <h2 className="font-bold">ONLINE SUPPORT</h2>
            <h2>Online support 24 hours a day</h2>
          </div>
        </div>


         <div className="bg-[#f7d8f9] flex  gap-4 text-xl justify-center items-center">
          <div>
            <img src="https://i.ibb.co/fpXtySw/policy-3-removebg-preview.png" alt="" />
          </div>
          <div>
            <h2 className="font-bold">MONEY RETURN</h2>
            <h2>Back guarantee under 5 days</h2>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Policy;