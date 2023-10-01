import "./Login.css"
import loginImg from "../../assets/images/login/login.svg"
import {Link} from "react-router-dom"
import { BiLogoFacebook, BiLogoLinkedin, BiLogoGoogle } from 'react-icons/bi';
const Login = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="Login Image" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm border-[1px] border-solid border-[#e0dbdb]">
      <div className="card-body">
      <h1 className="text-5xl font-bold text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className="text-center">Or Sign In with</p>
        <div className="text-3xl flex justify-center gap-5 my-5">
          <BiLogoFacebook className="cursor-pointer"></BiLogoFacebook>
          <BiLogoLinkedin className="cursor-pointer"></BiLogoLinkedin>
          <BiLogoGoogle className="cursor-pointer"></BiLogoGoogle>
        </div>
        <p className="text-center">New to this website? <Link className="text-[#FF3811] font-bold hover:underline" to="/signup">Sign Up</Link> </p>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login