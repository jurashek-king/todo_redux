import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 16px;
    font-family: Arial, Helvetica, "sans-serif";
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
