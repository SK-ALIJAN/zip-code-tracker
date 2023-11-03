import React from "react";
import img from "../assets/icon.png";
import styled from "styled-components";
const ImageShow = () => {
  return (
    <IMAGEWRAPPER>
      <img src={img} alt="icon" />
      <h1>Search by your zip code</h1>
    </IMAGEWRAPPER>
  );
};

export default ImageShow;

let IMAGEWRAPPER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    margin-top: 2rem;
  }
`;
