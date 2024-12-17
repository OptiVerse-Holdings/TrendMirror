import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f2fe; /* Soft beige background */
  padding: 4rem;
  border-radius: 11px;
  width: 100%;
  height: 28rem;
  max-width: 1080px;
  margin: 3rem 6rem;
  position: relative;
  top: 24rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`;

export const TextSection = styled.div`
  max-width: 100%;
  text-align: left;
  padding-bottom: 1rem;
  padding-left: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000;
  width: 30rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #4A4A4A;
  margin-bottom: 2rem;
  width: 33rem;
  line-height: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 1.5rem;
  padding-right: 30.8rem;
  padding-left: 0rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
`;

export const Icon = styled.img`
  width: 180px;
  height: 52px;

`;

export const AppPreview = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const AppImage = styled.img`
  width: 22rem;
  max-width: 900px;
  margin-top: 8rem;
  margin-right: 27rem;
  height: 40rem;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;
