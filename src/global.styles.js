import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
  font-family: 'Open Sans Condensed', 'Varela Round';
  padding: 20px 40px;
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}    
 
a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

#root {
  min-height: 0vh; /* Set this to control the height across all pages */
  max-height: 280vh; /* Limit the height */
  min-width: 0vw; /* Set this to control the height across all pages */
  max-width: 280vw; /* Limit the height */
  overflow: hidden;
  }
`