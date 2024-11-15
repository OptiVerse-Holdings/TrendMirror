import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #faffe5; /* Light beige background color */
  text-align: center;
  min-height: 00vh;
  max-height: 270vh;
  width: 290rem;

   @media (max-width: 1024px) {
    padding: 3rem 1.5rem; /* Adjust padding for medium screens */
    width: 200rem; /* Adjust width */
    max-height: 157vh; /* Reduce height */
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem; /* Further reduce padding for tablets */
    width: 150rem; /* Adjust width for smaller screens */
    max-height: 163vh;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; /* Adjust for mobile screens */
    width: 100%; /* Full width for small screens */
    height: 82vh;
  }

  @media (max-width: 350px) {
    padding: 1.5rem 0.5rem; /* Minimal padding for extra-small screens */
    width: 100%; /* Full width */
    max-height: 120vh;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  bottom: 2.5rem;

   @media (max-width: 1024px) {
    font-size: 1.8rem; /* Slightly reduce font size for medium screens */
    bottom: 2rem; /* Adjust positioning */
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem; /* Reduce font size for tablets */
    bottom: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem; /* Smaller font size for mobile screens */
    bottom: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 350px) {
    font-size: 0.7rem; /* Minimal font size for extra-small screens */
    bottom: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const ServiceCard = styled.div`
  position: relative;
  bottom: 84px;
  display: flex;
  align-items: center;
  gap: 0rem;
  border-radius: 12px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  left: 1.5rem;
  margin-bottom: 2rem; /* Add spacing between cards if multiple */

   @media (max-width: 1024px) {
    bottom: 70px; /* Adjust for medium screens */
    max-width: 750px;
    left: 1rem;
    padding: 1.8rem;
  }

  @media (max-width: 768px) {
    bottom: 50px; /* Further adjustment for tablets */
    max-width: 600px;
    left: 0.8rem;
    padding: 1.5rem;
    flex-direction: column; /* Stack items vertically for smaller screens */
  }

  @media (max-width: 480px) {
    bottom: 30px; /* Adjust for mobile screens */
    max-width: 100%;
    left: 0.5rem;
    padding: 1.2rem;
  }

  @media (max-width: 350px) {
    bottom: 20px; /* Minimal adjustment for extra-small screens */
    left: 0rem;
    padding: 1rem;
  }
  `;

export const ErviceCard = styled.div`
  position: relative;
  bottom: 54px;
  display: flex;
  align-items: center;
  gap: 7.9rem;
  border-radius: 12px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  right: 0rem;
  margin-bottom: 2rem; /* Add spacing between cards if multiple */

 @media (max-width: 1024px) {
    bottom: 40px; /* Adjust for medium screens */
    gap: 5rem; /* Reduce gap for better layout */
    padding: 1.8rem;
    max-width: 750px;
  }

  @media (max-width: 768px) {
    bottom: 30px; /* Further adjustment for tablets */
    gap: 3rem; /* Reduce gap for smaller screens */
    padding: 1.5rem;
    max-width: 600px;
    flex-direction: column; /* Stack items vertically */
    text-align: center; /* Center-align content */
  }

  @media (max-width: 480px) {
    bottom: 20px; /* Adjust for mobile screens */
    gap: 1.5rem; /* Smaller gap for mobile */
    padding: 1.2rem;
    max-width: 100%; /* Full width for mobile */
  }

  @media (max-width: 350px) {
    bottom: 10px; /* Minimal adjustment for extra-small screens */
    gap: 1rem;
    padding: 1rem;
    max-width: 100%; /* Ensure proper layout on small devices */
  }
  `;

export const RviceCard = styled.div`
  position: relative;
  bottom: 54px;
  display: flex;
  align-items: center;
  gap: 0rem;
  border-radius: 12px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  left: 2.4rem;
  margin-bottom: 2rem; /* Add spacing between cards if multiple */
  
   @media (max-width: 1024px) {
    bottom: 40px; /* Adjust position for medium screens */
    max-width: 750px; /* Adjust max-width */
    left: 1.5rem; /* Adjust left position */
    padding: 1.8rem;
  }

  @media (max-width: 768px) {
    bottom: 30px; /* Further adjust position for tablets */
    max-width: 600px; /* Narrower width for tablets */
    left: 1rem; /* Adjust left for smaller screens */
    padding: 1.5rem;
    flex-direction: column; /* Stack items vertically */
    text-align: center;
  }

  @media (max-width: 480px) {
    bottom: 20px; /* Adjust position for mobile screens */
    max-width: 100%; /* Full width on mobile */
    left: 0.5rem; /* Slightly adjust left */
    padding: 1.2rem;
  }

  @media (max-width: 350px) {
    bottom: 10px; /* Minimal adjustment for extra-small screens */
    left: 0rem;
    padding: 1rem;
  }
`;

export const ViceCard = styled.div`
  position: relative;
  bottom: 61px;
  display: flex;
  align-items: center;
  gap: 0rem;
  border-radius: 12px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  left: 8.5rem;
  margin-bottom: 2rem; /* Add spacing between cards if multiple */

    @media (max-width: 1024px) {
    bottom: 50px; /* Adjust for medium screens */
    max-width: 750px; /* Adjust width */
    left: 5rem; /* Reduce left offset */
    padding: 1.8rem; /* Adjust padding */
  }

  @media (max-width: 768px) {
    bottom: 40px; /* Further adjust for tablets */
    max-width: 600px; /* Narrower width */
    left: 3rem; /* Adjust left for smaller screens */
    padding: 1.5rem;
    flex-direction: column; /* Stack content vertically */
    text-align: center;
  }

  @media (max-width: 480px) {
    bottom: 30px; /* Adjust for mobile screens */
    max-width: 100%; /* Full width for small screens */
    left: 1rem; /* Slightly adjust left */
    padding: 1.2rem;
  }

  @media (max-width: 350px) {
    bottom: 20px; /* Minimal adjustment for extra-small screens */
    left: 0rem; /* Center the content */
    padding: 1rem;
  }
  `;

export const ServiceImage = styled.img`
  position: relative
  width: 390px;
  height: 53vh;
  border-radius: 12px;
  object-fit: cover;
  bottom: 490px;
  
  @media (max-width: 1024px) {
    width: 350px; /* Adjust width for medium screens */
    height: 100%; /* Adjust height */
    bottom: 400px; /* Adjust position */
  }

  @media (max-width: 768px) {
    position: relative
    width: 3px; /* Further reduce width for tablets */
    height: 100%;
    bottom: 300px; /* Adjust position for smaller screens */
    margin-right: 24rem;
    }

  @media (max-width: 480px) {
    position: relative;
    left: 5.4rem;
    width: 42%; /* Full width for mobile screens */
    height: 100%; /* Let height adjust based on width */
    bottom: 3px; /* Adjust position for mobile screens */
  }

  @media (max-width: 350px) {
    left: 6.6rem;
    height: 100%; /* Let height adjust dynamically */
    width: 32%; /* Full width for extra-small screens */
    top: 3px; /* Minimal bottom offset */
  }
`;

export const ErviceImage = styled.img`
  position: relative;  
  width: 390px;
  height: 53vh;
  border-radius: 12px;
  object-fit: cover;
  bottom: 70px;

   @media (max-width: 1024px) {
    width: 350px; /* Adjust width for medium screens */
    height: 30vh; /* Adjust height */
    bottom: 60px; /* Adjust position */
  }

  @media (max-width: 768px) {
    position: relative
    width: 360px; /* Further reduce width for tablets */
    height: 100%;
    bottom: 285px; /* Adjust position for smaller screens */
    margin-left: 23rem;
    }

  @media (max-width: 480px) {
    right: 5.5rem;
    width: 42%; /* Full width for mobile screens */
    height: 100%; /* Let height adjust dynamically */
    bottom: 190px; /* Adjust position for mobile screens */
  }

  @media (max-width: 350px) {
    right: 6.6rem;
    height: 100%; /* Let height adjust dynamically */
    width: 32%; /* Full width for extra-small screens */
    bottom: 162px; /* Minimal bottom offset */
  }
`;

export const RviceImage = styled.img`
  position: relative;
  width: 390px;
  height: 53vh;
  border-radius: 12px;
  object-fit: cover;
  bottom: 105px;

    @media (max-width: 1024px) {
    width: 350px; /* Adjust width for medium screens */
    height: 30vh; /* Adjust height */
    bottom: 90px; /* Adjust position */
    }

  @media (max-width: 768px) {
    position: relative 
    width: 370px; /* Further reduce width for tablets */
    height: 100%;
    bottom: 300px; /* Adjust position for smaller screens */
    margin-right: 24rem;
    }

  @media (max-width: 480px) {
    left: 5.4rem;
    width: 42%; /* Full width for mobile screens */
    height: 100%; /* Let height adjust dynamically */
    bottom: 220px; /* Adjust position for mobile screens */
  }

  @media (max-width: 350px) {
    left: 6.6rem;
    height: 100%; /* Let height adjust dynamically */
    width: 32%; /* Full width for extra-small screens */
    bottom: 190px; /* Minimal bottom offset */
  }
`;

export const ViceImage = styled.img`
  position: relative;
  width: 390px;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  bottom: 130px;
  
    @media (max-width: 1024px) {
    width: 350px; /* Adjust width for medium screens */
    height: 30vh; /* Adjust height */
    bottom: 110px; /* Adjust position */
  }

  @media (max-width: 768px) {
    position:5relative;
    left: 8.7rem;
    width: 340px; /* Further reduce width for tablets */
    height: 100%;
    bottom: 470px; /* Adjust position for tablets */
  }

  @media (max-width: 480px) {
    position: relative;
    left: 5.8rem;
    width: 42%; /* Full width for mobile screens */
    height: 100%; /* Let height adjust dynamically */
    bottom: 540px; /* Adjust position for mobile screens */
  }

  @media (max-width: 350px) {
    left: 4.4rem;
    height: 100%; /* Let height adjust dynamically */
    width: 32%; /* Full width for extra-small screens */
    bottom: 480px; /* Minimal bottom offset for small screens */
  }
`;

export const ServiceContent = styled.div`
  text-align: left;

  h3 {
    position: relative;
    left: 5.2rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      left: 4rem; /* Adjust for medium screens */
      font-size: 1.4rem;
    }

    @media (max-width: 768px) {
      left: 11.5rem; /* Adjust for tablets */
      font-size: 1.3rem;
      bottom: 180px;

    }

    @media (max-width: 480px) {
      position: relative;
      left: 3rem; /* Adjust for mobile screens */
      font-size: 0.7rem;
      text-align: center; /* Center-align for smaller screens */
      bottom: 95px;
      }

    @media (max-width: 350px) {
      text-align: center;
      position: relative;
      left: 1.3rem; /* Minimal adjustment for extra-small screens */
      font-size: 0.7rem;
      bottom: 60px;
    }
  }

  p {
    position: relative;
    left: 5.2rem;
    font-size: 1rem;
    width: 26.5vw;
    color: #666666;
    line-height: 1.3; /* Set line height to control spacing between lines */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limits text to 3 lines */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; /* Adds ellipsis (...) when text is truncated */

    @media (max-width: 1024px) {
      left: 4rem; /* Adjust for medium screens */
      width: 30vw; /* Slightly increase width */
    }

    @media (max-width: 768px) {
      left: 11.5rem; /* Adjust for tablets */
      width: 37Svw;
      font-size: 0.9rem;
      bottom: 180px;
    }

    @media (max-width: 480px) {
      position: relative;
      left: 13rem; /* Adjust for mobile screens */
      width: 44%; /* Make it more fluid for smaller screens */
      font-size: 0.5rem;
      text-align: left;
      bottom: 100px;
    }

    @media (max-width: 350px) {
      left: 8rem; /* Minimal adjustment for extra-small screens */
      width: 55%;
      text-align: center;
      font-size: 0.4rem;
      text-align: left;
      bottom: 70px;
    }
  }
`;

export const ErviceContent = styled.div`
  text-align: left;

h3 {
    position: relative;
    left: 2.4rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    bottom: 4.2rem;

    @media (max-width: 1024px) {
      left: 2rem; /* Adjust for medium screens */
      font-size: 1.4rem;
      bottom: 3.5rem; /* Adjust positioning */
    }

    @media (max-width: 768px) {
      position: relative;
      margin-right: 28rem; /* Adjust for tablets */
      font-size: 1.3rem;
      bottom: 3rem;
      width: 40vw;
    }

    @media (max-width: 480px) {
      text-align: cemter;
      left: 6rem; /* Adjust for mobile screens */
      font-size: 0.7rem;
      bottom: 4rem;
      text-align: center;
    }

    @media (max-width: 350px) {
      text-align: cemter;
      left: 8.7rem; /* Minimal adjustment for extra-small screens */
      font-size: 0.7rem;
      bottom: 4.5rem;
    }
  }

  p {
    position: relative;
    left: 2.4rem;
    font-size: 1rem;
    width: 25.5vw;
    color: #666666;
    line-height: 1.3; /* Control line spacing */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limits text to 3 lines */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; /* Adds ellipsis when text is truncated */
    bottom: 4.2rem;

    @media (max-width: 1024px) {
      left: 2rem; /* Adjust for medium screens */
      width: 30vw; /* Adjust width for medium screens */
      bottom: 3.5rem;
    }

    @media (max-width: 768px) {
      left: 2rem; /* Adjust for tablets */
      width: 37vw; /* Adjust width for tablets */
      bottom: 3rem;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      left: 9.1rem; /* Adjust for mobile screens */
      width: 25%; /* Make it more fluid for smaller screens */
      bottom: 4.1rem;
      font-size: 0.5rem;
      text-align: center;
    }

    @media (max-width: 350px) {
      left: 10rem; /* Minimal adjustment for extra-small screens */
      width: 23vw; /* Maximize width for very small screens */
      bottom: 5rem;
      font-size: 0.4rem;
      
    }
  }
`;

export const RviceContent = styled.div`
  text-align: left;

 h3 {
    position: relative;
    left: 5.2rem;
    font-size: 1.5rem;
    font-weight: bold;
    bottom: 7rem;

    @media (max-width: 1024px) {
      left: 4rem; /* Adjust left position for medium screens */
      font-size: 1.4rem;
      bottom: 6rem;
    }

    @media (max-width: 768px) {
      left: 12rem; /* Further reduce left offset for tablets */
      font-size: 1.3rem;
      bottom: 30rem;
    }

    @media (max-width: 480px) {
      position: relative;
      left: 3.1rem; /* Center closer for mobile screens */
      font-size: 0.7rem;
      padding-bottom: 12rem;
      bottom: 19.2rem;
      text-align: center;
    }

    @media (max-width: 350px) {
      left: 1.7rem; /* Adjust for extra-small screens */
      font-size: 0.7rem;
      bottom: 15.5rem;
    }
  }

  p {
    position: relative;
    left: 5.2rem;
    font-size: 1rem;
    width: 27.5vw;
    color: #666666;
    line-height: 1.3; /* Control spacing */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limit text to 3 lines */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; /* Adds ellipsis (...) when text is truncated */
    bottom: 6rem;

    @media (max-width: 1024px) {
      left: 4rem;
      width: 30vw;
      bottom: 5rem;
    }

    @media (max-width: 768px) {
      left: 12rem;
      width: 35vw; /* Expand width for smaller screens */
      bottom: 29rem;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      position: relative;
      left: 6.2rem;
      width: 36vw; /* Full width on smaller screens */
      bottom: 30.5rem;
      font-size: 0.5rem;
      text-align: left;
    }

    @media (max-width: 350px) {
      left: 20.5em;
      width: 50%; /* Maximize width for very small screens */
      bottom: 27.2rem;
      font-size: 0.4rem;
    }
  }

`;

export const ViceContent = styled.div`
  text-align: left;

  h3 {
    position: relative;
    right: 5.6rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    bottom: 7.9rem;

    @media (max-width: 1024px) {
      right: 4.5rem; /* Adjust position for medium screens */
      font-size: 1.4rem;
      bottom: 6.5rem; /* Reduce bottom margin */
    }

    @media (max-width: 768px) {
      right: 20rem; /* Further adjust for tablets */
      font-size: 1.3rem;
      bottom: 16.5rem;
    }

    @media (max-width: 480px) {
      right: 10rem; /* Center closer for mobile screens */
      font-size: 0.7rem;
      bottom: 27.4rem;
      text-align: center; /* Center-align for smaller screens */
    }

    @media (max-width: 350px) {
      right: 5.9rem; /* Minimal adjustment for extra-small screens */
      font-size: 0.7rem;
      bottom: 25.3rem;
    }
  }

  p {
    position: relative;
    right: 5.6rem;
    font-size: 1rem;
    width: 25.5vw;
    color: #666666;
    line-height: 1.3; /* Control line spacing */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limit text to 3 lines */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; /* Adds ellipsis (...) when text is truncated */
    bottom: 7.9rem;

    @media (max-width: 1024px) {
      right: 4.5rem;
      width: 30vw;
      bottom: 6.5rem;
    }

    @media (max-width: 768px) {
      right: 16rem;
      width: 35vw; /* Increase width for tablets */
      bottom: 16rem;
      font-size: 0.9rem;
      text-align: left;
    }

    @media (max-width: 480px) {
      right: 7rem;
      width: 36vw; /* Full width on smaller screens */
      bottom: 27.7rem;
      font-size: 0.5rem;
      text-align: left; /* Center-align for mobile screens */
    }

    @media (max-width: 350px) {
      left: 0.6rem;
      width: 42%; /* Maximize width for very small screens */
      bottom: 26rem;
      font-size: 0.4rem;
    }
  }

`;