import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { api } from "../../api/api";
import { async } from "@firebase/util";
import { GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name);
        saveUserInfo(name, email);
        toast.success("Registration successfully");

        user?.uid && navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  // handleUpdateUserProfile
  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  // saveUserInfo
  const saveUserInfo = async (name, email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(`${api}/user`, { name, email }, config);
  };

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  // google signIn
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("Guser", user);
        saveUserInfo(user.displayName, user.email);
        user?.uid && toast.success("Login successful");
        user?.uid && navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-primaryColor py-10">
      {/* <!-- Login component --> */}
      <div className="w-full lg:w-auto md:w-auto flex justify-center items-center shadow-xl bg-primaryColor border rounded-lg ">
        {/* <!-- Login form --> */}
        <div className="w-[24rem] h-[32rem] flex flex-wrap content-center justify-center rounded-l-md bg-white">
          <div className="w-72">
            {/* <!-- Heading --> */}
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>
            {/* Error MEG start */}

            {/* Error MEG end */}

            {/* <!-- Form --> */}
            <form onSubmit={handleFormSubmit} className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Full Name</label>
                <input
                  type="name"
                  placeholder="Enter your name"
                  id="name"
                  name="name"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" />{" "}
                <label for="remember" className="mr-auto text-xs font-semibold">
                  Remember for 30 days
                </label>
                <Link href="#" className="text-xs font-semibold text-purple-700">
                  Forgot password?
                </Link>
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-primary bg-primaryTextColor hover:bg-primary px-2 py-1.5 rounded-md">
                  Sign in
                </button>
                {/* 
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <img
                    className="w-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    alt=""
                  />
                  Sign in with Google
                </button> */}
                <SocialLogin handleGoogleSignIn={handleGoogleSignIn} />
              </div>
            </form>

            {/* <!-- Footer --> */}
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
              <Link to="/signup" className="text-xs font-semibold text-purple-700">
                Sign up
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Login banner --> */}
        {/* <div className="w-[24rem] h-[32rem] lg:flex md:flex xl:flex  flex-wrap content-center justify-center rounded-r-md hidden">
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://i.imagescrap.org/2022/11/08/4622433-1.webp"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
