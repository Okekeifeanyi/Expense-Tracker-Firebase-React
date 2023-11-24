import { auth, provider } from "../../config/firbase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./styles.css"


export const Auth = () => {

const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authinfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
    }
    localStorage.setItem("auth", JSON.stringify(authinfo));
    navigate("/expense-tracker"); //you can actually put to navigate to any page of your choice
  };
  return (
    <div className="login-page">
      <p> Sign In With Google to Continue </p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        {" "}
        Sign In With Google
      </button>
    </div>
  );
};
