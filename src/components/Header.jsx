import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to "/login" regardless of the login state
    navigate("/login");
  };

  const handleLogoutClick = () => {
    // Handle logout logic if needed
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLoginSubmit = () => {
    // Handle login logic here, if successful set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div className="p-3 mb-5">
      <ul className="flex justify-end items-center mr-10 text-lg">
        <li className="p-2 ml-12 font-normal tracking-wider">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="p-2 ml-12 font-normal tracking-wider">
          <a href="#">Email</a>
        </li>
        <li className="p-2 ml-12 font-normal tracking-wider">
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li className="p-2 ml-12 font-normal tracking-wider">
          {isLoggedIn ? (
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
