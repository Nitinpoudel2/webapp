import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
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
    </a>
  );
};

export default Logo;
