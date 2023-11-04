// ZipCodeContext.js
import React, { createContext, useState } from "react";

const ZipCodeContext = createContext();

const ZipCodeProvider = ({ children }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async (postalCode) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      if (!response.ok) {
        throw new Error("Invalid postal code or failed to fetch data");
      }
      const data = await response.json();
      setLocationInfo(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


    const fetchLocationFromCoordinates = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data for current location");
      }
      const data = await response.json();
      // setPostalCode(data.address.postcode);
      fetchLocationInfo(data.address.postcode);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };


  const clearLocationInfo = () => {
    setLocationInfo(null);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <ZipCodeContext.Provider
      value={{
        locationInfo,
        loading,
        error,
        fetchLocationInfo,
  
        clearLocationInfo,
        clearError,
      }}
    >
      {children}
    </ZipCodeContext.Provider>
  );
};

export { ZipCodeProvider, ZipCodeContext };
