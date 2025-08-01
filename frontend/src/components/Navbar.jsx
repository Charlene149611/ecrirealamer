import { Link, useNavigate } from "react-router-dom";
import useAuth from "../auth/UseAuth";

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (token) {
      logout();
      navigate("/login");
    }
  };

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li><Link to="/">Accueil</Link></li>
        {token ? (
          <>
            <li><Link to="/dashboard">Profil</Link></li>
            <li>
              <button onClick={handleLogout} style={{ cursor: "pointer" }}>
                Se déconnecter
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Connexion</Link></li>
            <li><Link to="/register">Inscription</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
