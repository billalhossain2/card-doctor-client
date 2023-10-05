import { useContext, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { userContext } from "../../Providers/AuthProvider";

import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification } from "firebase/auth";

const Signup = () => {
  useTitle("Signup - Car Doctor");
  const { user, signUpUser, updateUserProfile } = useContext(userContext);
  const [error, setError] = useState("")
  const [success, setSucccess] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
    confirmPassword: "",
    checked:false,
  });

  const onChangeHandler = (e) => {
    e.target.type==="checkbox" ? setFormData({...formData, checked:e.target.checked}) : setFormData({...formData, [e.target.name]:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSucccess("")
    const form = e.target;
    const {name, photoUrl, email, password, confirmPassword, checked} = formData;
    console.log(name, photoUrl, email, password, confirmPassword, checked)
    //validate empty fields
    if(!name || !photoUrl || !email || !password || !confirmPassword || !checked){
      return Swal.fire({
        icon: 'error',
        title: 'All fields are mandatory',
        text: 'Please fill in all the fields!',
      })
    }else if(password !== confirmPassword){
      return setError("Password did not match!")
    }
    //pwd: bill.Hossain76*

    //validate password
    if(!(/[a-z]/).test(password)){
      return setError("Your password should contain at least one lower case letter")
    }else if(!(/[A-Z]/).test(password)){
      return setError("Your password should contain at least one upper case letter")
    }else if(!(/[0-9]/).test(password)){
      return setError("Your password should contain at least one digit")
    }else if(!(/[@#%\*_-]/).test(password)){
      return setError("Your password should contain at least one special character")
    }else if(password.length < 6){
      return setError("Your password should be 6 characters or longer")
    }

    //create a new user with firebase
    signUpUser(email, password)
    .then(userCredential => {
      setSucccess("Successfully created a new user")

      //update profile
      updateUserProfile({displayName:name, photoURL:photoUrl})
      .then(()=>{
        console.log("Added displayName and photoURL")

        //Send email verification
      sendEmailVerification(userCredential.user)
      .then(()=>{
        console.log("Email verification Sent!")
        toast("Email verification sent!")
      })
      .catch(error => console.log(error.message))
      })
      .catch(error => console.log(error.message))
    })
    .catch(error => setError(error.message))
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-full" src={loginImg} alt="Login Image" />
        </div>
        <div className="card w-full max-w-sm border-[1px] border-solid border-[#e0dbdb]">
          <form action="" onSubmit={handleSubmit}>
            <div className="card-body">
              <h1 className="md:text-5xl text-3xl font-bold text-center">
                Signup
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  onChange={onChangeHandler}
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  name="photoUrl"
                  placeholder="photo Url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={onChangeHandler}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={onChangeHandler}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  onChange={onChangeHandler}
                  name="confirmPassword"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <p className="text-center">
                Have an account?{" "}
                <Link
                  className="text-[#FF3811] font-bold hover:underline"
                  to="/login"
                >
                  Login
                </Link>{" "}
              </p>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="checkbox"
                  className="me-3"
                  type="checkbox"
                  id="terms"
                />
                <label htmlFor="terms">
                  Accept{" "}
                  <Link
                    to="/terms-and-conditions"
                    className="text-[#FF3811] hover:underline font-bold"
                  >
                    Terms And Condition
                  </Link>{" "}
                </label>
              </div>
              <div className="form-control mt-6">
                <div>
                  <p className="text-red-500 font-bold text-center my-3">{error}</p>
                  <p className="text-green-500 font-bold text-center my-3">{success}</p>
                </div>
                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Signup;
