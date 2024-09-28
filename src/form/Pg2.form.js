import React, { useContext } from "react";
import FormContext from "../formContext/form.context";
import "./Page1.css"; // Assuming you're using the same CSS file for styling

export const Pg2 = () => {
  const {
    brandName,
    setBrandName,
    brandType,
    setBrandType,
    streetAddress,
    setStreetAddress,
    city,
    setCity,
    zipCode,
    setZipCode,
    taxIdNumber,
    setTaxIdNumber,
  } = useContext(FormContext);

  const handleSaveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  return (
    <div>
        
      <center>
        <h4>Step 2</h4>
        <h1>Business Information</h1>
        <p>Please Enter Information About your Company</p>
      </center>

      <div className="head1">
        <h4>GENERAL INFORMATION</h4>
      </div>

      <form className="grid-container">
        {/* Brand Name */}
        <div className="flex-col">
          <label htmlFor="brandName" className="form-label">
            Brand Name *
          </label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => {
              setBrandName(e.target.value);
              handleSaveToLocalStorage("brandName", e.target.value);
            }}
            className="form-control"
          />
        </div>

        {/* Brand Type */}
        <div className="flex-col">
          <label htmlFor="brandType" className="form-label">
            Brand Type *
          </label>
          <input
            type="text"
            value={brandType}
            onChange={(e) => {
              setBrandType(e.target.value);
              handleSaveToLocalStorage("brandType", e.target.value);
            }}
            className="form-control"
          />
        </div>

        {/* Street Address */}
        <div className="flex-col">
          <label htmlFor="streetAddress" className="form-label">
            Street Address *
          </label>
          <input
            type="text"
            value={streetAddress}
            onChange={(e) => {
              setStreetAddress(e.target.value);
              handleSaveToLocalStorage("streetAddress", e.target.value);
            }}
            className="form-control"
          />
        </div>

        {/* City */}
        <div className="flex-col">
          <label htmlFor="city" className="form-label">
            City *
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              handleSaveToLocalStorage("city", e.target.value);
            }}
            className="form-control"
          />
        </div>

        {/* Zip Code */}
        <div className="flex-col">
          <label htmlFor="zipCode" className="form-label">
            Zip Code *
          </label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => {
              setZipCode(e.target.value);
              handleSaveToLocalStorage("zipCode", e.target.value);
            }}
            className="form-control"
          />
        </div>

        {/* Tax ID Number */}
        <div className="flex-col">
          <label htmlFor="taxIdNumber" className="form-label">
            Tax ID Number *
          </label>
          <input
            type="text"
            value={taxIdNumber}
            onChange={(e) => {
              setTaxIdNumber(e.target.value);
              handleSaveToLocalStorage("taxIdNumber", e.target.value);
            }}
            className="form-control"
          />
        </div>
      </form>

      {/* DOCUMENTS Section */}
      <div>
        <h4>DOCUMENTS</h4>
        <p>Once the following documents are signed, You will be ready to get started</p>

        <div className="document-input-container">
          {/* First Document Input */}
          <div className="document-input-wrapper">
            <input
              type="text"
              className="document-input"
              placeholder={`Electronically sign the document                                                                                                                                                                                                                        ✔`}
            />
            
            <button className="next-button">{">"}</button>
          </div>

          {/* Second Document Input */}
          <div className="document-input-wrapper">
            <input
              type="text"
              className="document-input"
              placeholder={`Non Adult beverage Kroger market Supplier waiver and release                                                                                                                                                                        X`}
            />
           
            <button className="next-button">{">"}</button>
          </div>
        </div>
      </div>
      <div>
        <h4>COI PDF UPLOAD</h4>
        <p>Once the following documents are signed, You will be ready to get started</p>
        <div className="document-input-container">
          {/* First Document Input */}
          <div className="document-input-wrapper">
            <input
              type="text"
              className="document-input"
              placeholder={`Electronically sign the document                                                                                                                                                                                                                        ✔`}
            />
            
            <button className="next-button">{">"}</button>
          </div>

          {/* Second Document Input */}
          
        </div>
      </div>
    </div>
  );
};
