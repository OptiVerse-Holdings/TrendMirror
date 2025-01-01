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
  padding: 0 2rem; /* Default padding for all screens */
  text-align: center;
  background-color: #f3f2fe;
  bottom: 7.8rem;
  height: 33rem; /* Make height adaptive */
  width: 100%;

  /* Large screens (Desktops and larger laptops) */
  @media (min-width: 1201px) {
    bottom: 7rem;
    padding: 0 4rem;
    max-width: 1400px; /* Centered container for large screens */
    margin: 0 auto;
  }

  /* Medium screens (Small laptops and tablets) */
  @media (max-width: 1200px) {
    bottom: 4.2rem;
    padding: 0 3rem;
    max-width: 100%;
  }

  /* Tablets and small laptops */
  @media (max-width: 768px) {
    bottom: 3rem;
    padding: 0 2rem;
    max-width: 100%; /* Take full width */
    flex-direction: column;
  }

  /* Mobile screens */
  @media (max-width: 480px) {
    bottom: 2rem;
    padding: 0 1rem;
    width: 100%; /* Fit within smaller screens */
  }

  /* Very small mobile screens */
  @media (max-width: 350px) {
    bottom: 1.5rem;
    padding: 0 0.5rem;
    width: 100%; /* Full width for compact screens */
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

  /* Large screens (Desktops and larger laptops) */
  @media (min-width: 1201px) {
    left: 18rem;
    width: 43rem;
    font-size: 1rem; /* Slightly larger font for readability */
  }

  /* Medium screens (Small laptops and tablets) */
  @media (max-width: 1200px) {
    left: 3rem;
    width: 40rem;
    font-size: 0.85rem; /* Adjust font size for medium screens */
    margin-bottom: 1.5rem;
  }

  /* Tablets and smaller laptops */
  @media (max-width: 768px) {
    left: 1rem;
    width: 90%;
    font-size: 0.8rem; /* Adjust font size for smaller devices */
    margin-bottom: 1.2rem;
    bottom: 4px;
  }

  /* Mobile screens */
  @media (max-width: 480px) {
    left: 0.5rem;
    width: 95%;
    font-size: 0.7rem; /* Smaller font size for mobile devices */
    margin-bottom: 1rem;
    bottom: 2px; /* Adjust position */
  }

  /* Very small mobile screens */
  @media (max-width: 350px) {
    left: 0.2rem;
    width: 100%; /* Full width for compact screens */
    font-size: 0.6rem; /* Smallest font size for very small screens */
    margin-bottom: 0.8rem;
  }
`;

export const FeaturesGrid = styled.div`
  display: flex;
  gap: 1.5rem; /* Default gap for large screens */
  justify-content: center;
  flex-wrap: wrap;

  /* Medium screens (small laptops and tablets) */
  @media (max-width: 1024px) {
    gap: 1.8rem; /* Adjust gap for medium screens */
    position: relative;
    right: 1.6rem;
  }

  /* Tablets and smaller laptops */
  @media (max-width: 768px) {
    gap: 1rem; /* Further reduce gap for tablets */
    right: 0;
  }

  /* Mobile screens */
  @media (max-width: 480px) {
    gap: 0.8rem; /* Smaller gap for mobile devices */
  }

  /* Very small mobile screens */
  @media (max-width: 350px) {
    gap: 0.5rem; /* Minimal gap for compact layouts */
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25); /* Shadow */
  opacity: 0; /* Start hidden */
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${({ delay }) => delay || '0s'}; /* Add delay for staggering */

  /* Medium screens (small laptops and tablets) */
  @media (max-width: 1024px) {
    max-width: 600px; /* Adjust card width for medium screens */
    padding: 1.3rem; /* Reduce padding */
    width: 100%; /* Full width within container */
    height: 18rem; /* Adjust height for larger screens */
    left: 0.5rem;
  }

  /* Tablets and small laptops */
  @media (max-width: 768px) {
    max-width: 350px; /* Adjust card size for tablets */
    padding: 1.2rem; /* Adjust padding */
    width: 90%;
    height: 16rem;
  }

  /* Mobile screens */
  @media (max-width: 480px) {
    max-width: 300px; /* Smaller width for mobile devices */
    padding: 1rem;
    width: 100%; /* Full width within container */
    height: 14rem; /* Adjust height for smaller devices */
  }

  /* Very small mobile screens */
  @media (max-width: 350px) {
    max-width: 250px; /* Minimal width for very small screens */
    padding: 0.8rem; /* Compact padding */
    width: 100%; /* Full width within container */
    height: 12rem; /* Further reduce height */
  }
`;
export const FeatureImage = styled.img`
  position: relative;
  right: 0.2rem;
  width: 13%;
  height: 2.4rem;
  border-radius: 8px;
  top: 0.7rem;

  /* Medium screens (small laptops and tablets) */
  @media (max-width: 1024px) {
    top: 2rem; /* Adjust vertical position */
    right: 0.6rem; /* Adjust horizontal alignment */
    width: 10%; /* Reduce width */
    height: 3.4rem; /* Increase height for medium screens */
  }

  /* Tablets and small laptops */
  @media (max-width: 768px) {
    right: 1rem; /* Adjust horizontal alignment */
    width: 100%; /* Full width within container */
    height: 8rem; /* Increase height for tablets */
  }

  /* Mobile screens */
  @media (max-width: 480px) {
    right: 0.8rem; /* Adjust position */
    width: 100%; /* Full width within container */
    height: 6rem; /* Reduce height for mobile devices */
    bottom: 1rem; /* Adjust vertical position */
  }

  /* Very small mobile screens */
  @media (max-width: 350px) {
    right: 0.6rem; /* Center the image further */
    width: 95%; /* Slightly reduce width */
    height: 5rem; /* Reduce height for very small screens */
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

  /* Medium screens (small laptops and tablets) */
  @media (max-width: 1024px) {
    top: 1.3rem; /* Adjust vertical position */
    left: 0; /* Center alignment for medium screens */
    font-size: 1.4rem; /* Slightly increase font size */
    width: 18rem; /* Adjust width */
  }

  /* Tablets and small laptops */
  @media (max-width: 768px) {
    top: 0.8rem; /* Adjust position for tablets */
    left: 0;
    font-size: 1.1rem; /* Adjust font size */
    width: 90%; /* Full width within container */
    text-align: center; /* Center-align text */
  }

  /* Mobile screens */
  @media (max-width: 480px) {
    top: 0.5rem; /* Adjust position for smaller screens */
    font-size: 0.9rem; /* Reduce font size for mobile */
    width: 100%; /* Full width within container */
    text-align: center;
  }

  /* Very small mobile screens */
  @media (max-width: 350px) {
    top: 0.3rem; /* Minimal adjustment */
    font-size: 0.8rem; /* Small font size for very small screens */
    width: 95%; /* Slightly narrower width */
    text-align: center;
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
    position: relative;
    left: 3.4rem;
    top: 1.7rem; /* Adjust position for medium screens */
    font-size: 1.19rem; /* Slightly reduce font size */
    width: 48rem;
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

