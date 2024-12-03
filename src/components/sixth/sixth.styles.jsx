import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: white;
  top: 4rem;
  height: 27rem;
  width: 84%; /* Line occupies 80% of the parent container */
  margin: 0 auto; /* Center the container */
  border-top: 1px solid #d3d3d3; /* Light grey line on top */
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 68px;
  width: 100%;
  max-width: 1200px;
  position: relative;
  right: 1.7rem;
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
`;

export const FooterText = styled.p`
  position: relative;
  font-size: 14px;
  line-height: 1.5;
  color: #555;
  bottom: 6rem;
  width: 15rem;
`;

export const FooterBrand = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 38px;
  bottom: 5rem;
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
