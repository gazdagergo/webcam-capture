import React from "react";
import "./styles.css";
import styled from "styled-components";
import WebcamCapture from "./WebcamCapture";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <WebcamCapture />
    </div>
  );
}
