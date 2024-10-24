

const Banner = () => {
    return (
       

        
          
            <div className="relative flex flex-col justify-center items-center h-96 text-white rounded-xl p-8 bg-cover bg-center"
                 style={{ backgroundImage: 'url(/path-to-your-bg-shadow-image)' }}>
              <div className="text-center">
                <img
                  src="/path-to-your-logo-image" // Replace with actual path
                  alt="Cricket Logo"
                  className="w-24 mb-6 mx-auto"
                />
                <h1 className="text-3xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-lg mb-8">Beyond Boundaries Beyond Limits</p>
                <button className="bg-yellow-300 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                  Claim Free Credit
                </button>
              </div>
            </div>
          );
        };
        
      
        
    

export default Banner;