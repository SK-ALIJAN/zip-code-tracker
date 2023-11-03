import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <DIV>
      <div className="loader"></div>
      <p>Loading...</p>
    </DIV>
  );
};

export default Loader;

let DIV = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  .loader {
    width: 10rem;
    height: 10rem;
    border: 5px solid black;
    border-radius: 100%;
    border-bottom: 5px solid white;
    animation: loading 1s ease-in-out infinite;
  }

  p {
    position: relative;
    top: 4rem;
    right: 7.2rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
