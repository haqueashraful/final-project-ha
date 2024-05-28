import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [stateLoader, setStateLoader] = useState(true);
  const axiosPublic = useAxiosPublic();
  

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const profileUpdate = (name, photo_url) => {
    setLoad(true);
    updateProfile(auth.currentUser, {
      displayName: name || user?.displayName,
      photoURL: photo_url || user?.photoURL,
    })
      .then(() => {
      })
      .catch((error) => {
        toast.error("Cannot update profile:", error.message);
      })
      .finally(() => {
        setLoad(false);
      });
  };

  const logInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider)
  };

  const signInWithGitHub = () => {
    setLoader(true);
    return signInWithPopup(auth, gitHubProvider)
  }
  const signInWithTwitter = () => {
    setLoader(true);
    return signInWithPopup(auth, twitterProvider)
  }
  const logOutUser = () => {
    return signOut(auth)
      .then(() => {
        toast.success("Logout successfully");
        setUser(null);
      })
      .catch((error) => {
        toast.error("Error signing out:", error.message);
        throw error;
      })
      .finally(() => {
        setLoader(false);
      });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axiosPublic.post("/jwt", { email : currentUser?.email})
          .then((response) => {
            console.log(response.data.token);
          })
          .catch((error) => {
            console.error("Failed to fetch token:", error);
          })
          .finally(() => {
            setLoader(false);
          });
      } else {
        axiosPublic.post("/logout", { email: currentUser?.email })
        setLoader(false); // Only set loader to false, don't set user to null
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);
  
 

  const value = {
    setUser,
    logOutUser,
    logInUser,
    registerUser,
    profileUpdate,
    signInWithGoogle,
    signInWithGitHub,
    signInWithTwitter,
    setLoad,
    setLoader,
    setStateLoader,
    stateLoader,
    loader,
    user,
    load
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

MyContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { MyContext, MyContextProvider };