import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import googleLogo from "../assets/googleLogo.png";
import "./signin.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth provider/AuthProvider";

const SignIn = () => {
  const { handleGoogleLogin, handleRegistrationAuth, handleLoginAuth } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    if(toggle){
      console.log('account creation')
      handleRegistrationAuth(email, password)
      .then((result) =>{
        console.log(result.user)
      }).catch(error => console.log(error.message))
    }else{
      console.log('account logging')
      handleLoginAuth(email, password)
      .then(result => {
        alert('User Logged In')
        console.log(result.user)
      }).catch(error => console.log(error.message))
    }
  };

  // handle sign in & signup toggling
  const handleToggleAuthentication = () => {
    setToggle(!toggle);
  };
  // handle Google login
  const handleWithGoogleLogin = () => {
    handleGoogleLogin()
      .then((result) => {
        alert("logged in through google");
        console.log("google Login:", result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" min-h-screen flex justify-center  ">
      <div className="bg-[#23243a] flex flex-col items-start justify-end  lg:w-2/5 relative ">
        <Link to="/">
          <div className="flex items-center absolute top-3 left-5">
            <img src={logo} className="h-14" />
            <p className="text-lg">Roomify</p>
          </div>
        </Link>

        <h1 className="text-3xl px-4">
        Welcome Back!
        </h1>
        <p className="text-[#cdcdf4] px-4 pb-6">
          {"\" Unlock a world of possibilities by signing in to your account. Whether it is managing your tasks, staying connected with friends, or accessing exclusive content, your journey begins here. Do not have an account yet? Join us and experience seamless access to our platform  features. Let us make every moment count together \""}
        </p>
      </div>
      <div className="bg-[#0e0f24] flex flex-col items-center bg- justify-c flex-1 relative">
        {toggle ? (
          <p
            onClick={handleToggleAuthentication}
            className="text-[15px] text-[#dedee2] hover:text-white absolute right-10 top-5 cursor-pointer"
          >
            Sign in
          </p>
        ) : (
          <p
            onClick={handleToggleAuthentication}
            className="text-[15px] text-[#dedee2] hover:text-white absolute right-10 top-5 cursor-pointer"
          >
            Sign up
          </p>
        )}
        {/* offsite element */}
        <img src={logo} className="h-28 mb-5 " alt="" />
        {toggle ? (
          <h1 className="text-3xl">Create new account</h1>
        ) : (
          <h1 className="text-3xl ">Sign in</h1>
        )}
        <form onSubmit={handleLogin} className="lg:w-[400px] mt-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white ">Email</span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              name="email"
              className="signinPlaceholder input input-bordered bg-[#33334b]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="signinPlaceholder input input-bordered bg-[#33334b]"
              required
            />
          </div>
          <div className="form-control mt-6">
            {toggle ? (
              <button className="btn btn-primary text-lg">
                Create Account
              </button>
            ) : (
              <button className="btn btn-primary text-lg">
                Sign In with Email
              </button>
            )}
          </div>
        </form>
        <div className="flex mt-4">
          {" "}
          <div className="text-with-borders"> </div>{" "}
          <div className="text-with-lines text-sm">OR CONTINUE WITH</div>
          <div className="text-with-borders"></div>{" "}
        </div>
        <div
          onClick={handleWithGoogleLogin}
          className="lg:w-[400px] mt-4 cursor-pointer "
        >
          <div className="flex items-center bg-[#33334b] border-[#5840ff] border-[2px] justify-center py-[2px] rounded-lg ">
            <img className="h-10" src={googleLogo} alt="" />
            <p>Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
