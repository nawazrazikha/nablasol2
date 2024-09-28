import React from "react";
import "./Navbar.css"; // For custom styles

export const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="navbar">
      <div
        className={`nav-item ${currentPage === 1 ? "active" : ""}`}
        onClick={() => setCurrentPage(1)}
      >
        My Profile
      </div>
      <div
        className={`nav-item ${currentPage === 2 ? "active" : ""}`}
        onClick={() => setCurrentPage(2)}
      >
        Business Information
      </div>
      <div
        className={`nav-item ${currentPage === 3 ? "active" : ""}`}
        onClick={() => setCurrentPage(3)}
      >
        Additional Users
      </div>
    </div>
  );
};
