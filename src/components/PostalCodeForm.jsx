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

  // const handleCurrentLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       fetchLocationFromCoordinates(latitude, longitude);
  //     }, handleLocationError);
  //   } else {
  //     alert('Geolocation is not supported in your browser');
  //   }
  // };

  // const fetchLocationFromCoordinates = async (lat, lon) => {
  //   try {
  //     const response = await fetch(`https://api.zippopotam.us/reverse?latitude=${lat}&longitude=${lon}`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data for current location');
  //     }
  //     const data = await response.json();
  //     setPostalCode(data.postal_codes[0].postal_code);
  //     fetchLocationInfo(data.postal_codes[0].postal_code);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleLocationError = (error) => {
  //   console.error(error);
  //   alert('Failed to retrieve current location');
  // };

  return (
    <WRAPPER>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Enter Postal Code"
          className="input"
          required
        />
        <button type="submit">
          <BsSearch className="btn" />
        </button>
        {/* <button onClick={handleCurrentLocation}>Current Location</button> */}
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
  button {
    /* height: 3rem;
    width: 3rem; */
    border: 0;
    border-radius: 7px;
    background-color: inherit;
    position: relative;
    right: 30px;
    top: 5px;
    .btn {
      font-size: 1.5rem;
      font-weight: 600;
      color: teal;
    }
    .btn:hover {
      color: teal;
      cursor: pointer;
    }
  }
`;
