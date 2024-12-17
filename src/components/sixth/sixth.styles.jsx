import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #473678;
  width: 90rem;
  top: 29rem;
  height: 66rem;

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
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
`;

export const Footer2= styled.p`
  position: relative;
  font-size: 14px;
  line-height: 1.4;
  color: white;
  bottom: 5rem;
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
  width: 15rem;
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
