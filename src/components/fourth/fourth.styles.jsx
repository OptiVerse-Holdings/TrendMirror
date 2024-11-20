import styled from 'styled-components';

export const FAQSection = styled.section`
  position: relative;
  text-align: center;
  padding: 4rem 2rem;
  left: 9.7rem;
  
  @media (max-width: 768px) {
    position: relative;
    text-align: center;
    left: 8rem;
  }

   @media (max-width: 480px) {
    position: relative;
    left: 4.3rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
   
  @media (max-width: 1024px) {
    position: relative;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    position: relative;
    font-size: 1.65rem;
    right: 2rem;
  }

   @media (max-width: 480px) {
    position: relative;
    font-size: 1.45rem;
    right: 3.3rem;
  }
  
   @media (max-width: 360px) {
    position: relative;
    font-size: 0.8rem;
    right: 4.3rem;
    bottom: 10rem;
  }

   @media (max-width: 350px) {
    position: relative;
    font-size: 0.8rem;
    right: 4.3rem;
    bottom: 10rem;
  }

`;

export const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: black;
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    position: relative;
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    position: relative;
    font-size: 0.92rem;
    right: 2rem;
  }

   @media (max-width: 480px) {
    position: relative;
    font-size: 0.8rem;
    right: 3.3rem;
  }

      @media (max-width: 360px) {
    position: relative;
    font-size: 0.4rem;
    right: 4.3rem;
    bottom: 10.8rem;
  }

    @media (max-width: 350px) {
    position: relative;
    font-size: 0.4rem;
    right: 4.3rem;
    bottom: 10.8rem;
  }
`;

export const FAQContainer = styled.div`
  width: 900px;
  margin: 0 auto;

   @media (max-width: 1024px) {
  position: relative;
  width: 700px;
  margin: 0 auto;
  right: 1.7rem;
  }

   @media (max-width: 768px) {
  position: relative;
  width: 470px;
  margin: 0 auto;
  right: 1.7rem;
  }

  @media (max-width: 480px) {
  position: relative;
  width: 360px;
  margin: 0 auto;
  right: 3.1rem;
  }

    @media (max-width: 360px) {
  position: relative;
  width: 260px;
  margin: 0 auto;
  right: 4.1rem;
  bottom: 11.4rem;
  }

   @media (max-width: 350px) {
  position: relative;
  width: 260px;
  margin: 0 auto;
  right: 4.1rem;
  bottom: 11.4rem;
  }
`;

export const FAQItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const FAQHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 480px) {
  position: relative;
  font-size: 0.9rem;
  }
  
   @media (max-width: 360px) {
  position: relative;
  font-size: 0.7rem;
  }

   @media (max-width: 350px) {
  position: relative;
  font-size: 0.7rem;
  }
`;

export const FAQContent = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: #666;
  border-top: 1px solid #ddd;
  text-align: left; /* Align text to the left */
  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  @media (max-width: 480px) {
  position: relative;
  }
`;

export const IconWrapper = styled.div`
  font-size: 1.2rem;
  background-color: #000; /* Black background */
  color: #fff; /* White icon color */
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

   @media (max-width: 480px) {
  position: relative;
  font-size: 0.6rem;
  }

   @media (max-width: 360px) {
  position: relative;
  font-size: 0.4rem;
  }

  @media (max-width: 350px) {
  position: relative;
  font-size: 0.4rem;
  }
`;