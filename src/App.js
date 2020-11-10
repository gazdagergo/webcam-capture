import React from "react";
import "./styles.css";
import styled from "styled-components";
import WebcamCapture from "./WebcamCapture";

const AppStyled = styled.div`
  background: black;
`;

export default function App() {
  return (
    <AppStyled>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <WebcamCapture />
    </AppStyled>
  );
}
