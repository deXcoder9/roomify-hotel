import logo from "../assets/logo.png";

const SignIn = () => {
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
    }
  return (
    <div className=" min-h-screen flex justify-center  ">
      <div className="bg-[#23243a] flex flex-col items-center justify-center lg:w-2/5 ">
        <h1 className="text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          corporis.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          veritatis iste fuga reiciendis. Esse illo recusandae odio maiores quas
          itaque quod facilis, vel cum, dicta est impedit aspernatur ea sunt?
        </p>
      </div>
      <div className="bg-[#0e0f24] flex flex-col items-center justify-center flex-1 relative">
        <p className="text-[15px] text-[#dedee2] hover:text-white absolute right-10 top-5 ">
          {" "}
          Sign in
        </p>
        <img src={logo} className="h-16" alt="" />
        <h1 className="text-3xl">Create new account</h1>
        <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
