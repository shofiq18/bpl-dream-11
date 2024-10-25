

import logo from '../../public/image/assets/logo.png'


const Header = () => {
    return (
    <div className='max-w-7xl mx-auto mt-12'>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 ">
       <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
 
  <div className="navbar-end">
  <div className="navbar-center hidden mr-20 lg:flex">
    <ul className="menu menu-horizontal text-gray-500 gap-8">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
     
       
    </ul>
  </div>
    <a className="btn">0 Coin </a>
  </div>
</div>
    
        </div>
    );
};

export default Header;