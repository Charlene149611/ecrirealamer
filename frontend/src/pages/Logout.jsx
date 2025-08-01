
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/UseAuth"; 

const Logout = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

   const handleLogout = () => {
    setToken("");        // vide le token du contexte et localStorage via AuthProvider
    navigate("/login");  // redirige vers login
  };


  return <button onClick={handleLogout}>Se déconnecter</button>;
};

export default Logout;
