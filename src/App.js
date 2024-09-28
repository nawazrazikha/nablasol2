import "./App.css";
import React, { useState } from "react";
import { Pg1 } from "./form/Pg1.form";
import { Pg2 } from "./form/Pg2.form";
import { Pg3 } from "./form/Pg3.form";
import { Navbar } from "./form/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container">
      <center className="mt-4">
        <h3>Create New Account</h3>
      </center>

      {/* Navbar component */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Render the appropriate page based on currentPage */}
      {currentPage === 1 && <Pg1 />}
      {currentPage === 2 && <Pg2 />}
      {currentPage === 3 && <Pg3 />}

      {/* Navigation buttons */}
      <center>
        {currentPage > 1 && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Back
          </button>
        )}
        {currentPage < 3 && (
          <button
            className="btn btn-primary mx-4"
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </center>
    </div>
  );
}

export default App;
