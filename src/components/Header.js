import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constant";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        //adding the logged in user deails as an object to the store:
        dispatch(addUser(
          {
            uid,
            email,
            displayName,
          }
        ));
        navigate("/browse");
      } else {
        // User is signed out. //removing the logged in user deails from the store:
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); //this will be executed when the compinent unmounts from the DOM.
  }, [dispatch, navigate]);


  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        src={ NETFLIX_LOGO }
        alt="Netflix Logo"
        className="w-44 mt-2 ml-4"
      />

      {user && (
        <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          Welcome {user?.displayName?.split(" ")[0]}
        </p>
      )}

      {user && (
        <div>
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
            onClick={signOutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
