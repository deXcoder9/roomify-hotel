import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <div className="navbar  fixed-viewport pt-0 text-[#dedee2] ">
        <div className="flex-1">
        <Link to='/' className="flex items-center"> 
         <img src={logo} className="h-10" />
         <p className="text-xl">Roomify</p> </Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/rooms' className="text-[15px] hover:text-white ">Rooms</Link></li>
            <li><Link to="/signin" className="text-[15px] hover:text-white ">Sign Up</Link></li>
            
          </ul>
        </div>
      </div>
    );
};

export default NavBar;