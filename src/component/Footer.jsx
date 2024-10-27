import logo from '../../public/image/assets/logo-footer.png'

const Footer = () => {
    return (
        

        <div className=" mt-96 relative bg-[#06091A] pt-60">
                <div className='max-w-7xl mx-auto flex justify-center'>
                    <img src={logo} alt="" />
                </div>
            <footer className="footer md:flex justify-between max-w-7xl mx-auto text-base text-gray-500 py-16">

                {/* Newsletter */}

            <div className='absolute p-5 border border-white rounded-lg text-center -top-44 left-0 right-0 mx-auto  max-w-7xl'>
               <div className='bg-gradient-to-r from-blue-200 to-yellow-200  rounded-lg py-20 w-full'>
               <h2 className='font-bold text-black text-3xl mb-4 text-center'>Subscribe to our Newsletter</h2>
                <h4 className='font-medium text-lg text-gray-500 text-center mb-6'>Get the latest updates and news right in your inbox!</h4>
                <div>
                <input type="email" placeholder='Enter your email' className='pr-36 pl-4 py-3 bg-gray-100  rounded-lg mr-4' />
                <button className="bg-gradient-to-r from-pink-300 to-yellow-300 text-black font-bold py-3 px-4 rounded-lg transform transition-transform duration-200 hover:scale-105">Subscribe</button>
                </div>
               </div>
            </div>
                
                {/* footer */}
                <nav>
                    <h6 className="footer text-lg font-semibold  text-white">About Us</h6>
                    <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                 </nav>
                <nav>
                    <h6 className="footer text-lg font-semibold  text-white">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover"> Contact</a>
                </nav>

                <form>
                        <h6 className="footer text-lg font-semibold  text-white">Subscribe</h6>
                        <p className="mb-3">Subscribe to our newsletter for the <br /> latest updates.</p>
                    <fieldset className="form-control w-80">
                        <div className="join">
                             <input
                             type="text"
                             placeholder="Enter your email"
                            className="input input-bordered join-item" />
                            <button className="bg-gradient-to-r from-pink-300 to-yellow-300 text-black font-bold py-3 px-4 rounded-lg transform transition-transform duration-200 hover:scale-105">Subscribe</button>
                        </div>
                     </fieldset>
                </form>
            </footer>  
            <div className='border border-gray-900 mb-4'></div>
            <div className="text-center pb-8 pt-4 text-sm text-gray-500">
                <p>©2024 Your Company All Rights Reserved.</p>
            </div>
            


        </div>
            

        
        
    );
};

export default Footer;