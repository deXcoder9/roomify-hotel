import { Link, Navigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../auth provider/AuthProvider";

const NavBar = () => {
  const { userInfo, handleSignOut } = useContext(AuthContext)

  const handleLogout = () => {
    handleSignOut()
     .then(() => {
        setTimeout(function () {
          window.location.href = "/";
      }, 1000);
      })
     .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div className="navbar  fixed-viewport pt-0 text-[#dedee2] ">
      <div className="flex-1">
        <Link to='/' className="flex items-center">
          <img src={logo} className="h-10" />
          <p className="text-xl">Roomify</p> </Link>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/rooms' className="text-[15px] hover:text-white"> Rooms</Link></li>
          {
            userInfo?.email &&  <li><Link to='/bookings' className="text-[15px] hover:text-white ">My Bookings</Link></li>
          }

          {
            userInfo?.email ?
            <li onClick={handleLogout} className="text-[15px] hover:text-white " ><a>Logout</a></li>
          
              :
              <li><Link to="/signin" className="text-[15px] hover:text-white ">Sign Up</Link></li>
           }

        </ul>
      </div>
    </div>
  );
};

export default NavBar;