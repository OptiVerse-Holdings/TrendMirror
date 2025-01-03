import { createGlobalStyle } from "styled-components";
  // padding: 20px 40px;

export const GlobalStyle = createGlobalStyle`
    body {
  font-family: 'Open Sans Condensed', 'Varela Round', 'Abril Fatface';
  padding: 0px 0px;
  height: 100%;


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
  max-height: 3080vh; /* Limit the height */
  min-width: 0vw; /* Set this to control the height across all pages */
  max-width: 280vw; /* Limit the height */
  overflow: hidden;
  }
`