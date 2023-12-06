import "./Login.css"
import loginImg from "../../assets/images/login/login.svg"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { BiLogoFacebook, BiLogoLinkedin, BiLogoGoogle } from 'react-icons/bi';
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { userContext } from "../../Providers/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const Login = () => {
  useTitle('Login - Car Doctor')
  const from = useLocation()?.state?.from;
  const navigate = useNavigate()
  console.log(from)
  const {loginUserWithEmailAndPassword, sendUserPwdResetEmail} = useContext(userContext)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({email:"", password:""})
  const [show, setShow] = useState(false)
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setError("")
    setSuccess("")
    const form = e.target;
    const {email, password} = formData;
    if(!email || !password){
     return Swal.fire("Email and Password are mandatory")
    }

    loginUserWithEmailAndPassword(email, password)
    .then(() => {
      setSuccess("Successfully logged in")
      navigate(from)
      form.reset()
    })
    .catch(error => {
      setError(error.message)
    })
  }

  const handleResetPassword = (e)=>{
    const {email} = formData;
    if(!email){
      return Swal.fire("Please enter your email!")
     }
    sendUserPwdResetEmail(email)
    .then(()=>{
      Swal.fire("Please check your email!")
    })
    .catch(error => console.log(error.message))
  }
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="Login Image" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm border-[1px] border-solid border-[#e0dbdb]">
      <form action="" onSubmit={handleSubmit}>
      <div className="card-body">
      <h1 className="text-5xl font-bold text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={handleChange} type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input onChange={handleChange} type={show ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" />
          
          {
            !show ? <AiOutlineEyeInvisible onClick={()=>setShow(!show)} className="text-3xl absolute right-[45px] cursor-pointer top-2"></AiOutlineEyeInvisible> : <AiOutlineEye onClick={()=>setShow(!show)} className="text-3xl absolute right-[45px] cursor-pointer top-2"></AiOutlineEye>
          }
          </div>
          <label className="label">
            <p>Forgot password? <span onClick={handleResetPassword} className="hover:underline cursor-pointer">Reset</span> </p>
          </label>
        </div>
        <p className="text-center">Or Sign In with</p>
        <div className="text-3xl flex justify-center gap-5 my-5">
          <BiLogoFacebook className="cursor-pointer"></BiLogoFacebook>
          <BiLogoLinkedin className="cursor-pointer"></BiLogoLinkedin>
          <BiLogoGoogle className="cursor-pointer"></BiLogoGoogle>
        </div>
        <p className="text-center">New to this website? <Link className="text-[#FF3811] font-bold hover:underline" to="/signup">Sign Up</Link> </p>
        <p className="text-red-500 font-bold text-xl text-center">{error}</p>
        <p className="text-green-500 font-bold text-xl text-center">{success}</p>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">Login</button>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login