import Rating from 'react-rating-stars-component';

const Latest = () => {
  return (
    <div>
      <div className="flex  gap-6 mt-4 mb-4">
        <div>
        <img className="w-24 h-24 border border-purple-200 p-2" src="https://i.ibb.co/zrcRq9H/Real-Madrid-Home-Authentic-Jersey-2023-24.jpg" alt="" />
        </div>
        <div>
          <h2 className="font-bold text-xl">Real Madrid Jersey</h2>
          <Rating
      count={5} // Number of stars
      value={3} // The initial rating value
      edit={false} // Read-only
      size={24} // Size of the stars
      activeColor="#b182e3" // Color of the selected stars
    />
          <h2 className="text-xl ">$ 900</h2>
        
        </div>
      </div>


      <div className="flex  gap-6 mt-4 mb-4">
        <div>
        <img className="w-24 h-24 border border-purple-200 p-2" src="https://i.ibb.co/j6yTLPZ/24-Men-s-Authentic-Home-Jersey.jpg" alt="" />
        </div>
        <div>
          <h2 className="font-bold text-xl">Manchester City Home Jersey</h2>
          <Rating
      count={5} // Number of stars
      value={4} // The initial rating value
      edit={false} // Read-only
      size={24} // Size of the stars
      activeColor="#b182e3" // Color of the selected stars
    />
          <h2 className="text-xl ">$ 800</h2>
        
        </div>
      </div>


      <div className="flex  gap-6 mt-4 mb-4">
        <div>
        <img className="w-24 h-24 border border-purple-200 p-2" src="https://i.ibb.co/z4HqH1R/PH1-2.jpg" alt="" />
        </div>
        <div>
          <h2 className="font-bold text-xl">Liverpool Home Jersey</h2>
          <Rating
      count={5} // Number of stars
      value={4} // The initial rating value
      edit={false} // Read-only
      size={24} // Size of the stars
      activeColor="#b182e3" // Color of the selected stars
    />
          <h2 className="text-xl ">$ 700</h2>
        
        </div>
      </div>


    </div>
  );
};

export default Latest;