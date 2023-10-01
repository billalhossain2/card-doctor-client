import loginImg from "../../assets/images/login/login.svg"
import {Link} from "react-router-dom"
const Signup = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className="w-full" src={loginImg} alt="Login Image" />
    </div>
    <div className="card w-full max-w-sm border-[1px] border-solid border-[#e0dbdb]">
      <div className="card-body">
      <h1 className="md:text-5xl text-3xl font-bold text-center">Signup</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
        </div>
        <p className="text-center">Have an account? <Link className="text-[#FF3811] font-bold hover:underline" to="/login">Login</Link> </p>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">Signup</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Signup