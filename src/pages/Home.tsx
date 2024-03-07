import { useNavigate } from "react-router-dom";
import Main from "./home/Main";
import Posts from "./home/Posts";
import Works from "./home/Works";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FirebaseConfig";

const Home = () => {
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/auth/login");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };
  return (
    <div>
      <button onClick={handleSignOut}>logout</button>
      <Main />
      <Posts />
      <Works />
    </div>
  );
};

export default Home;
