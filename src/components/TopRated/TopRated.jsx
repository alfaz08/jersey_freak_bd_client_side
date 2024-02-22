import Latest from "./Latest";


const TopRated = () => {



  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3">
      
      <div>
        <h2 className="uppercase text-2xl font-bold mt-2 mb-2">Latest Products</h2>
        <Latest></Latest>
      </div>
      <div>
      <h2 className="uppercase text-2xl font-bold mt-2 mb-2">Top Rated Products</h2>
      <Latest></Latest>
      </div>
      <div>
      <h2 className="uppercase text-2xl font-bold mt-2 mb-2">Recent Views</h2>
      <Latest></Latest>
      </div>




    </div>
  );
};

export default TopRated;