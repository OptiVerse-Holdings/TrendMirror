import styled, { keyframes } from "styled-components";

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

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  bottom: 120px;
  height: 31rem;
  left: 2.5rem;

  @media (max-width: 1024px) {
    bottom: 80px;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    bottom: 60px;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    bottom: 40px;
    gap: 0.8rem;
  }

  @media (max-width: 360px) {
    bottom: 30px;
    gap: 0.4rem;
  }
`;

export const TextContent = styled.div`
  position: relative;
  flex: 1;
  max-width: 50%;
  bottom: 0;
  left: 2.4rem;

  @media (max-width: 1024px) {
    bottom: 3px;
    left: 2rem;
    max-width: 60%;
  }

  @media (max-width: 768px) {
    bottom: 5px;
    left: 1.8rem;
    max-width: 80%;
  }

  @media (max-width: 480px) {
    top: 3rem;
    left: 1.5rem;
    max-width: 90%;
  }

   @media (max-width: 400px) {
    top: 3.5rem;
    left: 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 360px) {
    top: 2rem;
    left: 1.4rem;
    max-width: 100%;
  }
`;

export const Heading = styled.h2`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    width: 80%;
    bottom: 2rem;
    right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    width: 75%;
    bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    position: relative;
    font-size: 2.5rem;
    width: 110%;
    right: 3.8rem;
    bottom: 4rem;
    text-align: left;
  }

  @media (max-width: 360px) {
    position: relative;
    font-size: 2.5rem;
    width: 110%;
    right: 3.8rem;
    bottom: 4rem;
    text-align: left;
  }
`;

export const Subtext = styled.p`
  font-size: 1.1rem;
  color: black;
  margin-bottom: 2rem;
  bottom: 6px;
  width: 40rem;

  span {
    display: inline-block;
    opacity: 0;
    animation: ${wordFadeIn} 0.5s forwards;
    animation-delay: calc(var(--index) * 0.3s);
  }

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    bottom: 4rem;
    width: 54rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 45rem;
  }

  @media (max-width: 480px) {
    position: relative;
    font-size: 0.8rem;
    width: 24.6rem;
    line-height: 1.1rem;
    bottom: 4.3rem;
    right: 3.7rem;
  }

   @media (max-width: 400px) {
    position: relative;
    font-size: 0.8rem;
    width: 22rem;
    line-height: 1rem;
    bottom: 4.5rem;
    right: 3.7rem;
  }

  @media (max-width: 360px) {
    position: relative;
    font-size: 0.7rem;
    width: 20rem;
    line-height: 1rem;
    bottom: 4.55rem;
    right: 3.65rem;
  }
`;

export const DownloadButton = styled.a`
  position: relative;
  left: 1px;
  bottom: 6px;

  @media (max-width: 1024px) {
    bottom: 55px;
  }

  @media (max-width: 768px) {
    bottom: 50px;
  }

  @media (max-width: 480px) {
    bottom: 40px;
  }

  @media (max-width: 360px) {
    bottom: 35px;
  }
`;

export const Icon = styled.img`
  width: 180px;
  height: 50px;
  margin-right: 8px;

  @media (max-width: 1024px) {
    width: 160px;
    height: 45px;
  }

  @media (max-width: 480px) {
    position: relative;
    width: 130px;
    height: 40px;
    margin-right: 4px;
    right: 3.7rem;
    bottom: 1.7rem;
  }

   @media (max-width: 400px) {
    position: relative;
    width: 5rem;
    height: 2rem;
    margin-right: 7rem;
    right: 3.8rem;
    bottom: 2.2rem;
  }

   @media (max-width: 360px) {
    position: relative;
    width: 5rem;
    height: 1.8em;
    right: 3.7rem;
    bottom: 2.5217rem;
  }
`;

export const ImageContent = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 1024px) {
    top: 2rem;
  }

  @media (max-width: 480px) {
    position: relative;
    flex-wrap: wrap;
    margin-right: 0.26rem;
    right: 11rem;
    top: 0.1rem;
  }

   @media (max-width: 400px) {
    position: relative;
    right: 11rem;
    margin-top: 3rem;
  }

 @media (max-width: 360px) {
    position: relative;
    right: 11.5rem;
    top: 0.1rem;
  }  
`;

export const ModelImage = styled.img`
  position: relative;
  max-width: 150rem;
  height: 25rem;
  bottom: 12px;
  left: 9rem;

  @media (max-width: 1024px) {
    height: 30rem;
  }

  @media (max-width: 480px) {
    height: 23rem;
    width: 24rem;
    bottom: 2rem;
  }

  @media (max-width: 400px) {
    height: 20rem;
    width: 21rem;
    bottom: 5rem;
  }

  @media (max-width: 360px) {
    height: 20rem;
    width: 21rem;
    bottom: 7rem;
  }
`;
