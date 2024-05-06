import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const signInToggleHandler = () => {
    setIsSignInForm((prev) => !prev);
  };

  let signInText = "Log In";
  if (!isSignInForm) {
    signInText = "Sign Up";
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg"
          alt="netflix"
        />
      </div>

      <div className="flex justify-center items-center h-screen text-white">
        <form className="relative p-12 bg-black bg-opacity-75 w-96 h-125 flex flex-col justify-between items-start">
          <div>
            <h1 className="mb-10 text-3xl self-start font-bold ml-1">
              {signInText}
            </h1>
          </div>

          {!isSignInForm && (
                <input
                type="text"
                placeholder="Name"
                className="block w-full border border-gray-700 rounded-md px-4 py-2 mb-6 bg-gray-200"
                />
          )}

          <input
            type="email"
            placeholder="Email"
            className="block w-full border border-gray-700 rounded-md px-4 py-2 mb-6 bg-gray-200"
          />
  
          <input
            type="password"
            placeholder="Password"
            className="block w-full bg-gray-200 border border-gray-700 rounded-md px-4 py-2 mb-6"
          />
          <button className="w-full bg-red-500 py-2 rounded-md hover:bg-red-700 mb-4 mt-8">
            {signInText}
          </button>

          {isSignInForm ? (
            <p className=""> New to Netflix? Please <span className="hover:cursor-pointer hover:text-red-500 ml-1" 
            onClick={signInToggleHandler}>Sign Up</span></p>
          ):
          <p className=""> Already have account? Please <span className="hover:cursor-pointer hover:text-red-500 ml-1" 
            onClick={signInToggleHandler}>Log In</span></p>
          }
        </form>
      </div>
    </div>
  );
};

export default Login;
