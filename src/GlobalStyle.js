import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: white;
    background: ${(props) => (props.whiteColor ? "white" : "black")};
    font-family: sans-serif;
  }
`;
export default GlobalStyle;
