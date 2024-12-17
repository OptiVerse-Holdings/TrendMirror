import styled, { keyframes }  from 'styled-components';

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

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0rem 0rem;
  text-align: center;
  background-color: #f3f2fe;
  bottom: 7.8rem;
  height: 32rem;
  width: 100%;
  
   @media (max-width: 1024px) {
    bottom: 6rem; /* Adjust for medium screens */
    left: 6.5rem;
    padding: 0rem 1.5rem;
        width: 250%; 

  }

  @media (max-width: 768px) {
    bottom: 4rem; /* Further adjust for tablets */
    left: 2.3rem;
    padding: 0rem 1rem; 
        width: 250%; 

  }

  @media (max-width: 480px) {
    bottom: 2rem; /* Adjust for small screens */
    left: 1.55rem;
    padding: 0rem 0.8rem;
        width: 250%; 
 
  }

  @media (max-width: 350px) {
  
    bottom: 3.5rem; /* Minimal adjustment for extra-small screens */
    left: 1.6rem;
    padding: 0rem 0.5rem;
    width: 250%; 
  }
`;

export const Title = styled.h2`
  position: relative;
  top: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding-top: 3rem;

  @media (max-width: 1024px) {
    position: relative;
    font-size: 1.8rem; /* Adjust font size for medium screens */
    right: 1.6rem;
    }

  @media (max-width: 768px) {
    font-size: 1.6rem; /* Further reduce font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Smaller font size for mobile devices */
    margin-bottom: 1.5rem; /* Adjust margin for small screens */
  }

  @media (max-width: 350px) {
    font-size: 0.7rem; /* Smallest font size for extra-small screens */
    margin-bottom: 1rem; /* Reduce margin for very small devices */
  }
`;


export const DSubtext = styled.p`
  position: relative;
  font-size: 0.9rem;
  color: black;
  margin-bottom: 2rem;
  bottom: 6px;
  width: 43rem;
  left: 18rem;

   span {
    display: inline-block;
    opacity: 0;
    animation: ${wordFadeIn} 0.5s forwards;
    animation-delay: calc(var(--index) * 0.3s); /* Stagger animation */
  }


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

export const FeaturesGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;


  @media (max-width: 1024px) {
    position: relative;
    gap: 1.2rem; /* Reduce gap for medium screens */
    right: 1.6rem;
    }

  @media (max-width: 768px) {
    gap: 1rem; /* Further reduce gap for tablets */
  }

  @media (max-width: 480px) {
    gap: 1.5rem; /* Smaller gap for mobile screens */
  }

  @media (max-width: 350px) {
    gap: 0.8rem; /* Minimal gap for extra-small screens */
  }
`;

export const FeatureCard = styled.div`
  position: relative; 
  background-color: #ffffff;
  border-radius: 18px;
  padding: 1.5rem;
  max-width: 970px;
  width: 21rem;
  height: 15rem;
  text-align: center;
  top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25); /* Shadow *
  opacity: 0; /* Start hidden */
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${({ delay }) => delay || '0s'}; /* Add delay for staggering */

  
   @media (max-width: 1024px) {
    max-width: 260px; /* Adjust card width for medium screens */
    padding: 1.3rem; /* Reduce padding */
  }

  @media (max-width: 768px) {
    max-width: 220px; /* Further reduce width for tablets */
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    position: relative;
    max-width: 180px; /* Smaller width for mobile devices */
    padding: 1rem;
    height: 16.5rem;
  }

  @media (max-width: 350px) {
    position: relative;
    max-width: 150px; /* Minimal width for extra-small screens */
    padding: 0.8rem;
    height: 13.5rem;
  }
`;

export const FeatureImage = styled.img`
  position: relative;
  right: 0.2rem;
  width: 13%;
  height: 2.4rem;
  border-bottom-radius: 8px;
  top: 0.7rem;

   @media (max-width: 1024px) {
    right: 1.4rem; /* Adjust position for medium screens */
    width: 120.5%; /* Slightly reduce width */
    height: 14rem; /* Reduce height */
  }

  @media (max-width: 768px) {
    right: 1.2rem; /* Further adjust position for tablets */
    width: 122%; /* Normal width for smaller screens */
    height: 12rem; /* Reduce height for tablets */
    
    }

  @media (max-width: 480px) {
    position: relative;
    right: 1.1rem; /* Minimal adjustment for mobile screens */
    width: 123%; /* Narrower width for smaller screens */
    height: 10rem; /* Further reduce height */
    bottom: 1rem;
    }

  @media (max-width: 350px) {
    right: 0.9rem; /* Center the image */
    width: 123%; /* Minimal width for very small screens */
    height: 8rem; /* Minimal height for extra-small screens */
  }
`;

export const FeatureTitle = styled.h3`
  position: relative;
  top: 0.8rem;
  left: 1rem;
  font-size: 1.15rem;
  font-weight: bold;
  width: 16rem;
  margin: 1rem 0 0.5rem;

    @media (max-width: 1024px) {
    bottom: 1rem; /* Adjust position for medium screens */
    right: 1.5rem;
    font-size: 1.2rem; /* Slightly reduce font size */
  }

  @media (max-width: 768px) {
    bottom: 0.8rem; /* Further adjust for tablets */
    right: 1rem;
    font-size: 1.1rem; /* Reduce font size for smaller screens */
  }

  @media (max-width: 480px) {
    bottom: 1.3rem; /* Adjust for mobile screens */
    right: 1.4rem;
    font-size: 0.7rem; /* Smaller font size for mobiles */
  }

  @media (max-width: 350px) {
    bottom: 1.4rem; /* Minimal adjustment for extra-small screens */
    right: 0.7rem;
    font-size: 0.7rem; /* Minimal font size for very small screens */
  }
`;

export const FeatureDescription = styled.p`
  position: relative;
  top: 1.7rem;
  right: 0.1rem;
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.5;
  width: 19rem;
  text-align: center; /* Ensures text aligns to the left */

    @media (max-width: 1024px) {
    bottom: 1rem; /* Adjust position for medium screens */
    font-size: 0.95rem; /* Slightly reduce font size */
  }

  @media (max-width: 768px) {
    bottom: 0.8rem; /* Further adjust position for tablets */
    font-size: 0.9rem; /* Reduce font size for smaller screens */
  }

  @media (max-width: 480px) {
    bottom: 1.4rem; /* Adjust for mobile screens */
    font-size: 0.52rem; /* Smaller font size for mobiles */
  }

  @media (max-width: 350px) {
    bottom: 1.6rem; /* Minimal adjustment for extra-small screens */
    font-size: 0.37rem; /* Minimal font size for very small screens */
  }
`;

