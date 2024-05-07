import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate(); //auto-navigate the user to the mentioned URL:

  const signInToggleHandler = () => {
    setIsSignInForm((prev) => !prev);
  };

  let signInText = "Log In";
  if (!isSignInForm) {
    signInText = "Sign Up";
  }

  const signInButtonHandler = () => {
    const message = validateData(email.current.value, password.current.value);
    console.log(message); //null return means both the email and the password is valid
    setErrorMessage(message);

    if (message) return;

    //sing in/sign up:
    if (!isSignInForm) {
      //sign up logic:
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value, 
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName } = user;
            dispatch(addUser({uid, email,displayName})); //updating the store again with displayname
            navigate("/browse");  
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      } 
      else {
        //sign in logic:
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      }
      
      
      //resetting the fields:
      // email.current.value = "";
      // password.current.value = "";
      // name.current.value = "";
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

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
        <form
          className="relative p-12 bg-black bg-opacity-75 w-96 h-125 flex flex-col justify-between items-start"
          onSubmit={formSubmitHandler}
        >
          <div>
            <h1 className="mb-10 text-3xl self-start font-bold ml-1">
              {signInText}
            </h1>
          </div>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="block w-full border border-gray-700 rounded-md px-4 py-2 mb-6 bg-gray-200 text-black"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="block w-full border border-gray-700 rounded-md px-4 py-2 mb-6 bg-gray-200 text-black"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="block w-full bg-gray-200 border border-gray-700 rounded-md px-4 py-2 mb-6 text-black"
          />

          <p className="text-red-500">{errorMessage}</p>

          <button
            className="w-full bg-red-500 py-2 rounded-md hover:bg-red-700 mb-4 mt-8"
            onClick={signInButtonHandler}
          >
            {signInText}
          </button>

          {isSignInForm ? (
            <p className="">
              {" "}
              New to Netflix? Please{" "}
              <span
                className="hover:cursor-pointer hover:text-red-500 ml-1"
                onClick={signInToggleHandler}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="">
              {" "}
              Already have account? Please{" "}
              <span
                className="hover:cursor-pointer hover:text-red-500 ml-1"
                onClick={signInToggleHandler}
              >
                Log In
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
