
const Member = () => {
  return (
    <div>
      <div>
  <h2 className='font-bold text-4xl mt-8  text-center mb-8 p-4'>Meet Our Team</h2>
  
  <div className='grid grid-cols-1 md:grid-cols-4'>

  <div className='col-span-1'>
   <h2 className='font-bold text-purple-500 text-xl'>Our Team</h2>
   <h2 className='text-4xl font-bold mt-4'>Meet Our Expert Team</h2>
   <h2 className='text-justify mt-4 text-gray-500'>
   We have a great team of 150+ members to serve you all time.There are several position in our company.All member give their best to keep you happy.

   </h2>
   <button className="btn mt-4  btn-warning text-black   hover:bg-black hover:text-white">View All Members</button>
  </div>
  
  <div className='col-span-3 flex gap-4 ml-2 mb-4'>

  <div className="relative">
    <img src="https://i.ibb.co/990gF8t/istockphoto-1075455058-612x612.jpg" alt="Shoes" className="w-[500px] rounded-xl" />
    <div className="absolute bg-white p-2  top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h2 className="font-bold hidden md:block">Oliver</h2>
      <h2 className="font-bold mt-2 text-center hidden md:block">CEO and Co-founder</h2>
    </div>
    
  </div>
  <div className="relative">
    <img src="https://i.ibb.co/6DVCz00/istockphoto-1317804584-612x612.jpg" alt="Shoes" className="w-[500px] rounded-xl" />
    <div className="absolute bg-white p-2  top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h2 className="font-bold hidden md:block ">Angela</h2>
      <h2 className="font-bold mt-2  hidden  text-center  md:block">Chief Marketing Officer</h2>
    </div>
    
  </div>
  <div className="relative">
    <img src="https://i.ibb.co/Jjb9GZQ/istockphoto-1364917563-612x612.jpg" alt="Shoes" className="w-[500px] rounded-xl" />
    <div className="absolute bg-white p-2  top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h2 className="font-bold hidden md:block ">Matthew</h2>
      <h2 className="font-bold mt-2 hidden text-center  md:block">Head Engineer</h2>
    </div>
    
  </div>

  </div>


    </div>
    </div>
    </div>


  );
};

export default Member;