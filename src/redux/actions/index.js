import { signInWithPopup } from "firebase/auth";
import {
  addDoc,
  collection,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import db, {
  auth,
  Provider,
  storage,
} from "../../firebase";
import { actionTypes } from "./actionTypes";

const setUser = (user) => {
  return {
    type: actionTypes.SET_USER,
    user,
  };
};

export const googleAuth = () => {
  return (dispatch) => {
    signInWithPopup(auth, Provider)
      .then((data) =>
        dispatch(setUser(data.user))
      )
      .catch((error) =>
        console.log(error.message)
      );
  };
};

export const signout = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then((user) => dispatch(setUser(user)));
  };
};

export const getUserLoginOrNot = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) =>
      dispatch(setUser(user))
    );
  };
};

export const uploadImageToStorage = (data) => {
  return (dispatch) => {
    const fileRef = ref(
      storage,
      `images/${data.image.name}`
    );
    const uploadTask = uploadBytesResumable(
      fileRef,
      data.image
    );
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred /
            snapshot.totalBytes) *
          100;
        console.log(progress);
      },
      (error) => console.log(error.message),
      async () => {
        const downloadURL = await getDownloadURL(
          uploadTask.snapshot.ref
        );
        addDoc(collection(db, "posts"), {
          user: {
            displayName: data.user.displayName,
            photoURL: data.user.photoURL,
          },
          description: data.description,
          photo: downloadURL,
          timestamp: data.timestamp,
        });
      }
    );
  };
};
