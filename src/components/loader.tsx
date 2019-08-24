import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderDiv = styled.div`
  border: 16px solid #e0e0de;
  border-top: 16px solid #5B4E77;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => (
  <LoaderDiv />
);

export default Loader;