import Bg from '../../public/image/assets/bg-shadow.png'
import Cricket from '../../public/image/assets/banner-main.png'

const Banner = () => {
    return (
        <div className=' relative max-w-7xl mx-auto mt-6   text-white bg-cover'>
            <div >
                <img className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-800 rounded-3xl bg-cover' src={Bg} alt="" />
            </div>
            <div className='text-center absolute top-16 bottom-16 left-44 right-44'>
                <img src={Cricket} alt="" className='mb-6 mx-auto '  />
                <h2 className=' text-4xl font-bold mb-4 '>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-2xl font-medium text-gray-400 mb-6 '>Beyond Boundaries Beyond Limits</p>
                <button className="btn bg-[#E7FE29]">Claim Free Credit</button>

            </div>
        </div>
    );
};

export default Banner;