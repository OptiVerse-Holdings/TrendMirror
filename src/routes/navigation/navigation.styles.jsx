import styled, { keyframes } from 'styled-components';

const wordFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: 'Varela Round', sans-serif;
  background-color: #ffffff;
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
  height: 50vh; /* 50% of the viewport height */
  min-height: 10rem; /* Ensure minimum height for smaller devices */
  max-height: 12rem;

  @media (max-width: 1024px) {
    padding: 1.5rem;
    height: 45vh;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    height: 40vh;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    height: auto;
    width: 95%;
  }

  @media (max-width: 400px) {
    padding: 0.6rem;
    height: auto;
    width: 100%;
  }

  @media (max-width: 360px) {
    padding: 0.5rem;
    width: 100%;
  }
`;

export const Header = styled.header`
  text-align: center;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1900px;
  bottom: 88.4%;
  padding: 1rem 0;
  z-index: 1000;
  background-color: white;


  @media (min-width: 1440px) {
    bottom: 12%;
    padding: 1.25rem 0;
  }

  @media (max-width: 1024px) {
    padding: 0.75rem;
    bottom: 10%;
    width: 90%;
    height: 5rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    bottom: 8%;
    width: 95%;
    height: 4.5rem;
  }

  @media (max-width: 480px) {
    bottom: 94%;
    width: 100%;
    height: 4rem;
    padding: 0.4rem;
  }

  @media (max-width: 400px) {
    bottom: 94%;
    height: 3.5rem;
  }

    @media (max-width: 376px) {
    bottom: 92.9%;
    height: 3rem;
    padding: 0.2rem;
  }

  @media (max-width: 360px) {
    bottom: 94%;
    height: 3rem;
    padding: 0.2rem;
  }
`;

export const Brand = styled.h1`
  position: relative;
  font-size: 1.75rem;
  font-weight: bold;
  margin-left: 5rem;
  margin-top: 0.1rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-top: 0.5rem;
    margin-left: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
    margin-top: 0.3rem;
    margin-left: 0.8rem;
  }
`;

export const MenuButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 5rem;


  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
`;

export const ModelImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 70%;
  }

  @media (max-width: 480px) {
    max-width: 60%;
  }

  @media (max-width: 360px) {
    max-width: 50%;
  }
`;


// import styled, { keyframes } from 'styled-components';

// const wordFadeIn = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Styled components for layout
// export const HeroContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   font-family: 'Varela Round', sans-serif;
//   background-color: #ffffff;
//   width: 100%;
//   max-width: 1900px;
//   margin: 0 auto;
//   height: 12rem;

//   /* Responsive Styles */
//   @media (max-width: 1024px) {
//     padding: 1rem;
//     height: auto;
//   }

//   @media (max-width: 768px) {
//     padding: 0.5rem;
//   }

//   @media (max-width: 480px) {
//     padding: 0.5rem;
//     width: 90%;
//   }

//   @media (max-width: 400px) {
//     padding: 0.4rem;
//     width: 95%;
//   }

//   @media (max-width: 360px) {
//     padding: 0.3rem;
//     width: 100%;
//   }
// `;

// export const Header = styled.header`
//   text-align: center;
//   position: fixed;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 80%;
//   max-width: 1900px;
//   bottom: 32.6rem;
//   padding: 1rem 0;
//   z-index: 1000;
//   background-color: white;

//   /* Adjust styles for larger screens */
//   @media (min-width: 1440px) {
//     bottom: 35rem;
//     padding: 1.25rem 0;
//   }

//   /* Responsive adjustments for medium screens */
//   @media (max-width: 1024px) {
//     padding: 0.75rem;
//     bottom: 28rem;
//     height: 5rem;
//     width: 90%;
//   }

//   /* Responsive adjustments for tablets */
//   @media (max-width: 768px) {
//     padding: 0.5rem;
//     bottom: 20rem;
//     height: 4.5rem;
//     width: 95%;
//   }

//   /* Responsive adjustments for large mobile screens */
//   @media (max-width: 480px) {
//     bottom: 52rem;
//     width: 100%;
//     height: 4rem;
//     padding: 0.7rem;
//   }

//   @media (max-width: 430px) {
//     bottom: 54.7rem;
//     width: 100%;
//     height: 3.5rem;
//     padding: 0.3rem;
//   }

//   @media (max-width: 412px) {
//     bottom: 53.7rem;
//     width: 100%;
//     height: 3.5rem;
//     padding: 0.3rem;
//   }

//  @media (max-width: 391px) {
//     bottom: 49.4rem;
//     width: 100%;
//     height: 3.5rem;
//     padding: 0.3rem;
//   }

//   @media (max-width: 376px) {
//     bottom: 38.4rem;
//     width: 100%;
//     height: 3.5rem;
//     padding: 0.3rem;
//   }

//   /* Responsive adjustments for very small mobile screens */
//   @media (max-width: 360px) {
//     bottom: 41rem;
//     width: 100%;
//     height: 3rem;
//     padding: 0.2rem;
//   }
// `;


// export const Brand = styled.h1`
//   font-size: 1.75rem;
//   font-weight: bold;

//   @media (max-width: 1024px) {
//     font-size: 1.5rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.3rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.rem;
//     margin-top: 0.5rem;
//     margin-left: 0.9rem;

//   }

//   @media (max-width: 400px) {
//     font-size: 1.2rem;
//     margin-top: 0.9rem;
//     margin-left: 0.9rem;
//   }

//   @media (max-width: 360px) {
//     position: relative; 
//     font-size: 1.2rem;
//     margin-top: 0.8rem;
//     margin-left: 0.9rem;
//   }
// `;

// export const MenuButton = styled.button`
//   font-size: 1.5rem;
//   background: none;
//   border: none;
//   cursor: pointer;

//   @media (max-width: 1024px) {
//     font-size: 1.4rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.3rem;
//     margin-top: 0.5rem;
//     margin-right: 0.9rem;

//   }

//   @media (max-width: 400px) {
//     font-size: 1.3rem;
//     margin-top: 0.8rem;
//     margin-right: 0.9rem;

//   }

//    @media (max-width: 360px) {
//     font-size: 1.1rem;
//     margin-right: 1rem;
//     margin-top: 0.8rem;
//   }
// `;

// export const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   padding: 1rem;

//   @media (max-width: 1024px) {
//     flex-wrap: wrap;
//   }

//   @media (max-width: 768px) {
//     padding: 0.8rem;
//   }

//   @media (max-width: 480px) {
//     flex-direction: column;
//     padding: 0.5rem;
//   }
// `;

// export const TextContent = styled.div`
//   flex: 1;
//   max-width: 50%;

//   @media (max-width: 1024px) {
//     max-width: 60%;
//   }

//   @media (max-width: 768px) {
//     max-width: 80%;
//   }

//   @media (max-width: 480px) {
//     max-width: 100%;
//   }
// `;

// export const Heading = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 800;

//   @media (max-width: 1024px) {
//     font-size: 2rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }

//   @media (max-width: 400px) {
//     font-size: 1.3rem;
//   }

//   @media (max-width: 360px) {
//     font-size: 1.1rem;
//   }
// `;

// export const Subtext = styled.p`
//   font-size: 1rem;
//   margin-bottom: 1.5rem;

//   @media (max-width: 1024px) {
//     font-size: 0.9rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 0.85rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }

//   @media (max-width: 400px) {
//     font-size: 0.7rem;
//   }

//   @media (max-width: 360px) {
//     font-size: 0.65rem;
//   }
// `;

// export const ModelImage = styled.img`
//   max-width: 100%;
//   height: auto;

//   @media (max-width: 1024px) {
//     max-width: 80%;
//   }

//   @media (max-width: 768px) {
//     max-width: 70%;
//   }

//   @media (max-width: 480px) {
//     max-width: 60%;
//   }

//   @media (max-width: 400px) {
//     max-width: 50%;
//   }

//   @media (max-width: 360px) {
//     max-width: 40%;
//   }
// `;
