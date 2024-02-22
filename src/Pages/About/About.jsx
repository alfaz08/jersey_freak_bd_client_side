
const About = () => {
  return (
    <div className="bg-purple-100 mt-8">
       
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
       <div className=" col-span-1    flex justify-center items-center ">
       <div className="grid">
       <h2 className="text-xl font-bold">ABOUT US</h2> 
        <h2 className="text-4xl mt-4 font-bold">ABOUT JERSEY FREAK BD</h2>
        
        <h2 className="text-lg font-semibold mt-4">
        Jersey Freak BD is a online jersey shop where you can find your favourite jersey
        </h2>
          
       
        

        <button className="mt-4 max-w-max btn btn-warning">LEARN MORE</button>
       </div>
       </div>
 

       <div className="col-span-1 flex justify-center items-center">
     <img className="w-96 h-96 m-4 rounded-lg" src="https://i.ibb.co/RHKrmyp/ranking-all-adidas-21-22-elite-team-kits-2.jpg" alt="" />
       </div>
       </div>





    </div>
  );
};

export default About;