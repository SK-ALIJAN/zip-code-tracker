// LocationInfo.js
import React, { useContext } from "react";
import { ZipCodeContext } from "../context/ZipCodeContext";
import ImageShow from "./ImageShow";
import Loader from "./Loader";
import styled from "styled-components";

const LocationInfo = () => {
  const { locationInfo, loading, error, clearLocationInfo, clearError } =
    useContext(ZipCodeContext);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="errorShow">
        <p>Error: {error} </p>
        <button onClick={clearError} className="removeError">
          Okey
        </button>
      </div>
    );
  }

  if (!locationInfo) {
    return <ImageShow />;
  }

  console.log(locationInfo);

  return (
    <WRAPPER>
      <div className="title">
        <p className="country">Country Name: {locationInfo.country}</p>
        <p className="result">{locationInfo.places.length} result found </p>
      </div>
      <div className="container">
        {locationInfo.places.map((ele, i) => {
          return (
            <div key={i}>
              <p>State: {ele.state}</p>
              <p>Place Name: {ele["place name"]}</p>
            </div>
          );
        })}
      </div>

      <button onClick={clearLocationInfo}>Clear</button>
    </WRAPPER>
  );
};

export default LocationInfo;

let WRAPPER = styled.div`
  margin-top: 3rem;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    .country {
      font-size: 2rem;
    }

    .result {
      font-size: 13px;
      font-weight: 600;
      color: grey;
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    div {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      text-align: center;
      padding: 1rem;
      border-radius: 7px;
      font-weight: 600;
    }
  }

  button {
    display: block;
    margin: auto;
    margin-top: 1rem;
    width: 7rem;
    padding: 10px 15px;
    border-radius: 6px;
    border: 0;
    background-color: teal;
    color: white;
    font-size: 1.5rem;
  }
`;
