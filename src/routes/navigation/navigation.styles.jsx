import styled from 'styled-components';

// Styled components for layout
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: 'Varela Round';
  background-color: #ffffff;
  width: 100%;
  max-width: 1200px; /* Limits the width on larger screens */
  margin: 0 auto;

    /* Responsive padding for smaller screens */
  @media (max-width: 1024px) {
    padding: 1.5rem;
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 700px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 1rem 0;
   margin: 0 auto; /* Centers the header on larger screens */

  /* Responsive padding adjustments */
  @media (max-width: 1024px) {
    padding: 0.75rem 0;
    max-width: 1000px; /* Adjust container width for medium screens */
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    max-width: 100%; /* Makes the header take full width on smaller screens */
    }

     @media (max-width: 480px) {
    padding: 0.5rem 0;
    max-width: 100%; /* Full width for mobile */
    align-items: center;
  }
`;

export const Brand = styled.h1`
  position: relative;
  bottom: 24px;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    bottom: 18px; /* Adjust position for medium screens */
    font-size: 1.1rem; /* Slightly reduce font size */
  }

  @media (max-width: 768px) {
    bottom: 12px; /* Further adjust position for tablets */
    font-size: 1rem; /* Reduce font size for smaller screens */
  }

  @media (max-width: 480px) {
    bottom: 23px; /* Adjust position for mobile screens */
    font-size: 0.9rem; /* Reduce font size for mobile devices */
  }

  @media (max-width: 350px) {
    bottom: 23px; /* Adjust position for mobile screens */
    font-size: 0.7rem; /* Reduce font size for mobile devices */
  }
`;

export const MenuButton = styled.button`
  position: relative;
  bottom: 28px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;

   @media (max-width: 1024px) {
    bottom: 20px; /* Adjust position for medium screens */
    font-size: 1.3rem; /* Slightly reduce font size */
  }

  @media (max-width: 768px) {
    bottom: 15px; /* Further adjust position for tablets */
    font-size: 1.2rem; /* Reduce font size for smaller screens */
  }

  @media (max-width: 480px) {
    bottom: 23px; /* Adjust position for mobile screens */
    font-size: 1rem; /* Reduce font size for mobile devices */
  }

  @media (max-width: 350px) {
    bottom: 23px; /* Adjust position for mobile screens */
    font-size: 0.7rem; /* Reduce font size for mobile devices */
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  bottom: 105px;

   @media (max-width: 1024px) {
    bottom: 80px; /* Adjust position for medium screens */
    flex-wrap: wrap; /* Allow wrapping for better layout */
    gap: 1rem; /* Add spacing between items */
  }

  @media (max-width: 768px) {
    bottom: 60px; /* Further adjust position for tablets */
    gap: 1.5rem; /* Increase gap for better spacing */
  }

  @media (max-width: 480px) {
    bottom: 40px; /* Adjust position for smaller screens */
    gap: 0.1rem; /* Maintain spacing on mobile */
  }
`;

export const TextContent = styled.div`
  position: relative;
  flex: 1;
  max-width: 50%;
  bottom: rem;

    @media (max-width: 350px) {
    position: relative;
    bottom: 17px;
  }
`;

export const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1rem;

   /* Responsive font size adjustments */
  @media (max-width: 1024px) {
    font-size: 2rem; /* Slightly smaller font for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font for small screens */
  }

  @media (max-width: 480px) {
    position: relative;
    font-size: 1rem; /* Smaller font for mobile screens */
    top: 7px;
  }

  @media (max-width: 350px) {
    position: relative;
    font-size: 0.6rem; /* Smaller font for mobile screens */
    top: 14px;
  }
`;

export const Subtext = styled.p`
  font-size: 0.97rem;
  color: black;
  margin-bottom: 2rem;
  bottom: 6px;


  /* Responsive font size and margin adjustments */
  @media (max-width: 1024px) {
    font-size: 0.9rem; /* Slightly smaller font for medium screens */
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem; /* Smaller font for tablets */
    margin-bottom: 1.2rem;
    bottom: 4px;
  }

  @media (max-width: 480px) {
    font-size: 0.50rem; /* Smallest font for mobile screens */
    margin-bottom: 1rem;
    top: 3px;
  }

  @media (max-width: 350px) {
    position: relative;
    font-size: 0.37rem; /* Smallest font for mobile screens */
    margin-bottom: 1rem;
  }
`;

export const DownloadButton = styled.a`
  position: relative;
  left: 1px;
  bottom: 6px;
   
   @media (max-width: 1024px) {
    left: 1px; /* Adjust position for smaller screens */
    bottom: 3px; /* Adjust position for smaller screens */
   };

   @media (max-width: 480px) {
    left: 3px; /* Adjust position for smaller screens */
    bottom: 3px; /* Adjust position for smaller screens */
   }
    `;

export const Icon = styled.img`
  width: 180px;
  height: 50px;
  margin-right: 8px;
  
   @media (max-width: 1024px) {
    position: relative;
    width: 120px; /* Adjust width for smaller screens */
    height: 42px; /* Adjust height for smaller screens */
    right: 4px; /* Reduce margin for better spacing */
  };

   @media (max-width: 480px) {
    position: relative;
    width: 60px; /* Adjust width for smaller screens */
    height: 22px; /* Adjust height for smaller screens */
    right: 4px; /* Reduce margin for better spacing */
  }

    @media (max-width: 350px) {
    position: relative;
    width: 40px; /* Adjust width for smaller screens */
    height: 15px; /* Adjust height for smaller screens */
    right: 4px; /* Reduce margin for better spacing */
  }
`;

export const ImageContent = styled.div`
  flex: 1;
  display: flex;

   @media (max-width: 1024px) {
    flex: 0.8; /* Slightly reduce the flex ratio on medium screens */
  }

  @media (max-width: 768px) {
    flex: 0.7; /* Further reduce flex ratio for tablets */
    padding: 1rem; /* Add some padding to prevent overlap */
  }

  @media (max-width: 480px) {
    flex: 1; /* Keep full width for small screens */
    flex-direction: column; /* Stack items if needed */
    padding: 0.5rem; /* Adjust padding for better fit */
  }
`;

export const ModelImage = styled.img`
  max-width: 150%;
  height: 34rem;

    @media (max-width: 1024px) {
    height: 30rem; /* Adjust height for medium screens */
  }

  @media (max-width: 768px) {
    height: 25rem; /* Further reduce height for tablets */
  }

  @media (max-width: 480px) {
    position: relative;
    height: 16rem; /* Reduce height for mobile screens */
    bottom: 20px;
    }
  
  @media (max-width: 350px) {
    position: relative;
    height: 12rem; /* Reduce height for mobile screens */
    bottom: 20px;
    }
`;