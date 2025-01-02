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
  max-width: 4080px;
  margin: 3rem 6rem;
  position: relative;
  top: 23.5rem;

   @media (max-width: 1024px) {
    position: relative;
    right: 2.6rem;
    width: 140rem;
    height: 37rem;
    top: 62.8rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }

   @media (max-width: 480px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
  width: 95%;
  height: 20rem;
  max-width: 4080px;
  margin: 3rem 6rem;
  position: relative;
  top: 54.5rem;
  right: 5.3rem;
  }

  @media (max-width: 400px) {
  width: 95%;
  height: 22rem;
  max-width: 4080px;
  margin: 3rem 6rem;
  position: relative;
  top: 54rem;
  right: 5.4rem;
  }

  @media (max-width: 360px) {
  width: 93%;
  height: 22rem;
  max-width: 4080px;
  margin: 3rem 6rem;
  position: relative;
  top: 50rem;
  right: 5.3rem;
  }
`;

export const TextSection = styled.div`
  max-width: 100%;
  text-align: left;
  padding-bottom: 1rem;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    position: relative;
    right: 3rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    position: relative;
    top: 4.2rem;
    right: 3rem;
    max-width: 100%;
  }

  @media (max-width: 400px) {
    position: relative;
    top: 4.2rem;
    right: 3rem;
    max-width: 100%;
  }

  @media (max-width: 360px) {
    position: relative;
    top: 4.2rem;
    right: 3rem;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000;
  width: 30rem;

   @media (max-width: 1024px) {
    width: 40rem;
    font-size: 2.3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

   @media (max-width: 480px) {
    position: relative;
    left: 1.1rem;
    width: 120%;
    font-size: 1.4rem;
    font-weight: bold;
  }

   @media (max-width: 400px) {
    position: relative;
    left: 1.1rem;
    width: 120%;
    font-size: 1.4rem;
    font-weight: bold;
  }

  @media (max-width: 360px) {
    position: relative;
    left: 1.1rem;
    width: 120%;
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #4A4A4A;
  margin-bottom: 2rem;
  width: 33rem;
  line-height: 1.5rem;

  @media (max-width: 1024px) {
    width: 47rem;
    font-size: 1.19rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    position: relative;
    left: 1.1rem;
    font-size: 0.5rem;
    width: 110%;
    line-height: 0.8rem;
  }

   @media (max-width: 400px) {
    position: relative;
    left: 1.1rem;
    font-size: 0.5rem;
    width: 120%;
    line-height: 0.8rem;
  }

  @media (max-width: 360px) {
    position: relative;
    left: 1.1rem;
    font-size: 0.5rem;
    width: 120%;
    line-height: 0.8rem;
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

  @media (max-width: 1024px) {
    position: relative;
    right: 2.5rem;
    max-width: 100%;
    margin-top: 2rem;
  }

   @media (max-width: 480px) {
    position: relative;
    left: 4.3rem;
    max-width: 100%;
    margin-top: 0.1rem;
    bottom: 1rem;
    width: 60%;
  }

    @media (max-width: 400px) {
    position: relative;
    left: 4.3rem;
    max-width: 100%;
    margin-top: 0.1rem;
    bottom: 1rem;
    width: 60%;
  }

   @media (max-width: 360px) {
    position: relative;
    left: 4.3rem;
    max-width: 100%;
    margin-top: 0.1rem;
    bottom: 1rem;
    width: 60%;
  }
`;

export const Icon = styled.img`
  width: 180px;
  height: 52px;

   @media (max-width: 480px) {
    width: 100px;
    height: 37px;
  }

   @media (max-width: 400px) {
    width: 100px;
    height: 37px;
  }

  @media (max-width: 360px) {
    width: 100px;
    height: 37px;
  }
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
