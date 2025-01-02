import styled, { keyframes } from 'styled-components';

export const TestimonialSection = styled.section`
  position: relative;  
  text-align: center;
  padding: rem 1rem;
  margin: 0;
  background-color: white;
  left: 1rem;
  top: 24rem;

  @media (max-width: 1044px) {
    position: relative;  
    top: 84rem;
    padding: 3rem 0.5rem; /* Adjust padding for medium screens */
  } 

  @media (max-width: 1034px) {
    padding: 3rem 0.5rem; /* Adjust padding for medium screens */
  }

   @media (max-width: 1024px) {
    padding: 3rem 0.5rem; /* Adjust padding for medium screens */
  }

   @media (max-width: 788px) {
    padding: 2rem 0.5rem; /* Smaller padding for smaller screens */
  }

   @media (max-width: 778px) {
    padding: 2rem 0.5rem; /* Smaller padding for smaller screens */
  }

  @media (max-width: 768px) {
    padding: 2rem 0.5rem; /* Smaller padding for smaller screens */
  }

  @media (max-width: 400px) {
    padding: 1rem 0.5rem; /* Tight padding for very small screens */
    padding-bottom: 1rem;
    }

   @media (max-width: 370px) {
    padding: 1rem 0.5rem; /* Tight padding for very small screens */
    padding-bottom: 6rem;
    }

   @media (max-width: 360px) {
    position: relative;
    padding: 1rem 0.5rem; /* Tight padding for very small screens */
    padding-bottom: 6rem;
    margin-top: 3rem;
    } 

  @media (max-width: 350px) {
    padding: 1rem 0.5rem; /* Tight padding for very small screens */
    padding-bottom: 6rem;
    } 
`;

export const SectionTitle = styled.h2`
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  bottom: 5rem;
  margin-bottom: 1.5rem;
  text-align: center; 
  padding: 0 1rem;

 @media (max-width: 1044px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
     padding: 0 0.5rem; 
    padding-right: 31rem; 
  }

   @media (max-width: 1034px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
     padding: 0 0.5rem; 
    padding-right: 31rem; 
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    padding: 0 1.5rem;
    padding-right: 14rem; 
  }

   @media (max-width: 788px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
     padding: 0 0.5rem; 
    padding-right: 31rem; 
  }

 @media (max-width: 778px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
     padding: 0 0.5rem; 
    padding-right: 31rem; 
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
     padding: 0 0.5rem; 
    padding-right: 31rem; 
  }

     @media (max-width: 500px) {
    font-size: 0.8rem;
    margin-bottom: .6rem; /* Reduce bottom margin */
    padding: 0 0.5rem; 
    padding-right: 57.5rem; 
}

   @media (max-width: 490px) {
    font-size: 0.8rem;
    margin-bottom: .6rem; /* Reduce bottom margin */
    padding: 0 0.5rem; 
    padding-right: 57.5rem; 
}

  @media (max-width: 480px) {
    position: relative;
    font-size: 1.5rem;
    bottom: 3rem;
    margin-bottom: 0.1rem;
    padding: 0 0.5rem; 
    padding-right: 52rem; 
    right: 0.4rem;
  }

  @media (max-width: 400px) {
    position: relative;
    font-size: 1.4rem;
    bottom: 3rem;
    margin-bottom: 0.1rem;
    padding: 0 0.5rem; 
    right: 2.65rem;
    padding-right: 50rem; 
  }

 @media (max-width: 370px) {
    font-size: 0.8rem;
    margin-bottom: .6rem; /* Reduce bottom margin */
    padding: 0 0.5rem; 
    padding-right: 57.5rem; 
}
  
 @media (max-width: 360px) {
    position: relative;
    font-size: 1.3rem;
    bottom: 3rem;
    margin-bottom: 0.1rem;
    padding: 0 0.5rem; 
    right: 3.3rem;
    padding-right: 50rem; 
}

  @media (max-width: 350px) {
    font-size: 0.6rem;
    margin-bottom: 2.6rem; /* Reduce bottom margin */
    padding: 0 0.5rem; 
    padding-right: 36.5rem; 
  }
`;

export const infiniteScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

export const TestimonialContainer = styled.div`
  display: flex;
  width: 280%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  bottom: 4.4rem;
  left: 0.94rem;

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
  bottom: 1px;
  right: 160px;
  width: 2.4rem;

   @media (max-width: 480px) {
    position: absolute;
    top: 5rem;
    right: 163px;
    width: 2.2rem;
  }

   @media (max-width: 350px) {
    position: relative;
    top: 0.3rem;
    right: 1px;
    width: 1.7rem;
  }
`;

export const DotIcon = styled.img`
  position: absolute;
  top: 230px;
  right: 207px;
  width: 0.7rem;

   @media (max-width: 350px) {
    width: 0.6rem;
    top: 6.8rem;
    right: 87px;
  }
`;

export const TestimonialText = styled.p`
  position: relative;
  font-size: 0.9rem;
  color: #666666;
  margin: 1rem 0;
  line-height: 1.5;
  font-weight: 800;
  width: 26.5rem;
  

  @media (max-width: 350px) {
    font-size: 0.5rem;
    bottom: 0.8rem;
  }
`;

export const AuthorName = styled.h3`
  position: relative;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0.5rem 0;
  top: 1.6rem;

  @media (max-width: 350px) {
    font-size: 0.7rem;
    top: 0.5rem;
  }
`;

export const AuthorPosition = styled.p`
  position: relative;
  font-size: 0.9rem;
  color: #999999;
  top: 1.4rem;

   @media (max-width: 350px) {
    font-size: 0.6rem;
    top: 0.2rem;
  }
`;
