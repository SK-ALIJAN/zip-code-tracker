import React, { useContext, useState } from "react";
import { ZipCodeContext } from "../context/ZipCodeContext";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const PostalCodeForm = () => {
  const { fetchLocationInfo } = useContext(ZipCodeContext);
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLocationInfo(postalCode);
    setPostalCode("");
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        fetchLocationFromCoordinates(latitude, longitude);
      }, handleLocationError);
    } else {
      alert("Geolocation is not supported in your browser");
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
      setPostalCode(data.address.postcode);
      fetchLocationInfo(data.address.postcode);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLocationError = (error) => {
    console.error(error);
    alert("Failed to retrieve current location");
  };

  return (
    <WRAPPER>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Enter Postal Code"
          className="input"
        />
        <button type="submit" className="submitBtn">
          <BsSearch className="btn" />
        </button>
        <button onClick={handleCurrentLocation} className="currentLocation">
          Current Location
        </button>
      </form>
    </WRAPPER>
  );
};

export default PostalCodeForm;

let WRAPPER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .input {
    width: 25rem;
    height: 3rem;
    padding-left: 10px;
    border: 2px solid teal;
    border-radius: 7px;
    outline: 0;
    font-weight: 600;
    letter-spacing: 2px;
    color: teal;
    caret-color: teal;
    background-color: transparent;
  }
  .input::placeholder {
    font-weight: 600;
    letter-spacing: 2px;
    color: teal;
  }
  .input:focus {
    border: 2px solid teal;
  }
  .submitBtn {
    /* height: 3rem;
    width: 3rem; */
    border: 0;
    border-radius: 7px;
    background-color: inherit;
    position: relative;
    right: 30px;
    top: 5px;
    cursor: pointer;
    .btn {
      font-size: 1.5rem;
      font-weight: 600;
      color: teal;
    }
  }
  .currentLocation {
    width: max-content;
    border: 0;
    border-radius: 7px;
    background-color: teal;
    padding: 12px 20px;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;
