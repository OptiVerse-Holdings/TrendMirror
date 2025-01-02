import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #473678;
  width: 60rem;
  top: 26rem;
  height: 54rem;
;
`;
  // border-top: 1px solid #d3d3d3; /* Light grey line on top */
  export const OwnloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 1.5rem;
  padding-right: 30.8rem;
  padding-left: 0rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  bottom: 7.3rem;
`;

export const WnloadButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0.2rem 1.5rem;
padding-right: 27rem;
padding-left: 0rem;
font-size: 1rem;
cursor: pointer;
font-weight: bold;
position: relative;
bottom: 9.63rem;
`;


export const NloadButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0.2rem 1.5rem;
right: 10.8rem;
padding-left: 0rem;
font-size: 1rem;
cursor: pointer;
font-weight: bold;
position: relative;
bottom: 12.1rem;
`;


export const LoadButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0.2rem 1.5rem;
right: 8.7rem;
padding-left: 0rem;
font-size: 1rem;
cursor: pointer;
font-weight: bold;
position: relative;
bottom: 14.4rem;
`;

export const Icon = styled.img`
  width: 20px;
  height: 22px;

`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 17px;
  width: 100%;
  max-width: 1200px;
  position: relative;
  left: 4.4rem;
  bottom: 6rem;

  @media (max-width: 1024px) {
  position: relative; /* Switch to absolute positioning */
  gap: 1px;
}

  @media (max-width: 480px) {
  position: relative; /* Switch to absolute positioning */
  gap: 1px;
  bottom: 2rem;
  left: 2.8rem;
}
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
  position: relative; /* Switch to absolute positioning */
  right: 1rem 
 }

  @media (max-width: 480px) {
  position: relative; /* Switch to absolute positioning */
  right: 1rem;

 }
  `;

export const FoterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
  position: relative; /* Switch to absolute positioning */
  right: 3.3rem;

  @media (max-width: 480px) {
   position: relative; /* Switch to absolute positioning */
   padding-left: 1rem;
   right: 24.9rem;
   top: 12rem;
  }

   @media (max-width: 400px) {
   position: relative; /* Switch to absolute positioning */
   padding-left: 1rem;
   right: 22.9rem;
   top: 12rem;
  }

   @media (max-width: 360px) {
   position: relative; /* Switch to absolute positioning */
   padding-left: 1rem;
   right: 21.9rem;
   top: 12rem;
  }
  `;

  export const PoterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
  position: relative; /* Switch to absolute positioning */
  right: 2.5rem
 }

    @media (max-width: 480px) {
  position: relative; /* Switch to absolute positioning */
  padding-left: 1rem;
  right: 24.9rem;
  top: 12rem;
 }
  `;

  export const MoterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
  position: relative; /* Switch to absolute positioning */
  right: 6rem
 }

  @media (max-width: 480px) {
  padding-left: 1rem;
  right: 57rem;
  top: 25rem;
}

@media (max-width: 400px) {
  padding-left: 1rem;
  right: 55rem;
  top: 25rem;
}

@media (max-width: 360px) {
  padding-left: 1rem;
  right: 54rem;
  top: 25rem;
}
  `;

export const FooterTitle = styled.h3`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 38px;
  bottom: 5rem;
  color: white;

 
`;

export const Footer1 = styled.h3`
  position: relative;
  font-size: 67px;
  font-weight: bold;
  margin-bottom: 38px;
  bottom: 1rem;
  color: #9186ae;
  left: 24rem;

  @media (max-width: 1024px) {
   position: relative;
   left: 15.7rem;
   bottom: 3rem;
  }

   @media (max-width: 480px) {
  padding-left: 1rem;
  left: 1.2rem;
  top: 17rem;
}

  @media (max-width: 400px) {
  padding-left: 0.1rem;
  left: 0.4rem;
  top: 17rem;
}

  @media (max-width: 360px) {
  position: relative;
  padding-left: 0.1rem;
  right: 8rem;
  top: 17rem;
}
`;

export const Footer2= styled.p`
  position: relative;
  font-size: 14px;
  line-height: 1.4;
  color: white;
  bottom: 6rem;
  width: 15rem;
`;

export const FooterText = styled.p`
  position: relative;
  font-size: 14px;
  line-height: 1;
  color: white;
  bottom: 7rem;
  width: 15rem;
`;

export const OoterText = styled.p`
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  color: white;
  bottom: 7rem;
  width: 23rem;

  @media (max-width: 480px) {
    position: relative;
  font-size: 14px;
  line-height: 1.6;
  color: white;
  bottom: 7rem;
  width: 23rem;
}

@media (max-width: 400px) {
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  color: white;
  bottom: 7rem;
  width: 21rem;
}

@media (max-width: 360px) {
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  color: white;
  bottom: 7rem;
  width: 20rem;
}
`;

export const FooterBrand = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 38px;
  bottom: 5rem;
  color: white;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialIcon = styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
