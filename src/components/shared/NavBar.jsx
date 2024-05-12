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
          <li><Link to='/rooms' className="text-[15px] hover:text-white ">Rooms</Link></li>
          {
            userInfo?.email &&  <li><Link to='/bookings' className="text-[15px] hover:text-white ">My Bookings</Link></li>
          }

          {
            userInfo?.email ?
            <div className="dropdown dropdown-end bg-transparent">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-transparent rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li onClick={handleLogout}><a>Logout</a></li>
          </ul>
        </div>
          
              :
              <li><Link to="/signin" className="text-[15px] hover:text-white ">Sign Up</Link></li>
           }

        </ul>
      </div>
    </div>
  );
};

export default NavBar;