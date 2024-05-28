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

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [myData, setMyData] = useState([]);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [stateLoader, setStateLoader] = useState(true);
  

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // useEffect(() => {
  //   fetch("data.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMyData(data);
  //       setLoader(false);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

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
    setLoader(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setStateLoader(false)
    });
    return () => {
      unsubscribe();
    };
  }, []); 

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
    myData,
    user,
    load
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

MyContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { MyContext, MyContextProvider };