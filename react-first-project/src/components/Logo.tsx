import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "8px", // Adjust padding for the size of the white background
          display: "inline-block",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="rounded-circle"
        />
      </div>
    </Link>
  );
};

export default Logo;
