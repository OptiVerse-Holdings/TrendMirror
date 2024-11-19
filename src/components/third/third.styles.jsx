import styled, { keyframes } from 'styled-components';

export const TestimonialSection = styled.section`
  position: relative;  
  text-align: center;
  padding: 4rem 1rem;
  margin: 0;
  background-color: white;
  left: 1rem;

   @media (max-width: 1024px) {
    position: relative;
    padding: 4rem 0rem;
    left: 0rem;
  }

  @media (max-width: 768px) {
    position: relative;
    padding: 4rem 0rem;
  }

   @media (max-width: 350px) {
    position: relative;
    bottom: 2rem;
    }
`;

export const SectionTitle = styled.h2`
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  bottom: 2rem;
  margin-bottom: 1.5rem;

    @media (max-width: 1024px) {
    right: 6.2rem;
    padding: 0rem 1.5rem;
  }

  @media (max-width: 768px) {
      font-size: 1.6rem;   
      right: 14.2rem;
  }

   @media (max-width: 480px) {
    right: 23.2rem;
    font-size: 1.4rem;
    bottom: 2.2rem;
  }

  @media (max-width: 350px) {
    right: 17rem;
    font-size: 0.7rem;
    bottom: 3rem;
  }
`;

export const infiniteScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

export const TestimonialContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 250%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

   @media (max-width: 480px) {
    position: relative;
    bottom: 1rem;
  }

   @media (max-width: 350px) {
    position: relative;
    bottom: 3rem;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  width: 200%; /* Ensures both sets (original + duplicate) fit for seamless scrolling */
  animation: ${infiniteScroll} linear infinite; 
  animation-duration: 30s; /* Adjust duration based on desired speed */
`;

export const TestimonialCard = styled.div`
  flex: 0 0 340px; /* Fixed width for each card */
  background-color: #ececec;
  border-radius: 21px;
  padding: 2rem;
  margin: 0 1rem;
  text-align: center;
  height: 23rem;

   @media (max-width: 480px) {
    right: 23.2rem;
    font-size: 1.4rem;
    background-color: #ececec;
  }
  
   @media (max-width: 350px) {
    flex: 0 0 220px; /* Fixed width for each card */
    height: 12rem;
    padding: 1rem;
     margin: 0 0.5rem;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;

  @media (max-width: 350px) {
    position: relative;
    bottom: 0rem;
  }
`;

export const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;

    @media (max-width: 350px) {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  }
`;

export const QuoteIcon = styled.img`
  position: absolute;
  bottom: 3px;
  right: 80px;
  width: 2.8rem;

   @media (max-width: 480px) {
    position: absolute;
    top: 5rem;
    right: 87px;
    width: 2.2rem;
  }

   @media (max-width: 350px) {
    position: relative;
    top: 0.3rem;
    right: px;
    width: 1.7rem;
  }
`;

export const DotIcon = styled.img`
  position: absolute;
  top: 215px;
  right: 132px;
  width: 1rem;

   @media (max-width: 350px) {
    width: 0.6rem;
    top: 6.8rem;
    right: 87px;
  }
`;

export const TestimonialText = styled.p`
  position: relative;
  font-size: 1rem;
  color: #666666;
  margin: 1rem 0;
  line-height: 1.5;
  font-weight: 800;
  

  @media (max-width: 350px) {
    font-size: 0.5rem;
    bottom: 0.8rem;
  }
`;

export const AuthorName = styled.h3`
  position: relative;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
  top: 1.9rem;

  @media (max-width: 350px) {
    font-size: 0.7rem;
    top: 0.5rem;
  }
`;

export const AuthorPosition = styled.p`
  position: relative;
  font-size: 0.9rem;
  color: #999999;
  top: 1.7rem;

   @media (max-width: 350px) {
    font-size: 0.6rem;
    top: 0.2rem;
  }
`;
