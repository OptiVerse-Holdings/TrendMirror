import React from 'react';
import Sand from '../../assets/blackdude.png';
import Secondgirl from '../../assets/secondgirl.png';
import Thirdgirl from '../../assets/thirdgirl.png';
import Fourthgirl from '../../assets/thirdgirl.png'; 

import { ServicesSection, Title, ServiceCard, ErviceCard, RviceCard, ViceCard, ServiceImage, ErviceImage, RviceImage, ViceImage, ServiceContent, ErviceContent, RviceContent, ViceContent     } from './second.styles';

const Second = () => {
  return (
    <ServicesSection>
      <Title>How it works</Title>
      <ServiceCard>
        <ServiceImage src={Sand} alt="Outfit Suggestion" />
        <ServiceContent>
          <h3>Online Fitting</h3>
          <p>
          Ensure your clothes fit perfectly with our online fitting service, tailored to match your unique measurements and preferences.
          </p>
        </ServiceContent>
      </ServiceCard>

      <ErviceCard>
        <ErviceContent>
          <h3>Outfit Suggestion</h3>
          <p>
            Get matched with your perfect style through our personalized outfit suggestion service,
            designed just for you.
          </p>
        </ErviceContent>
        <ErviceImage src={Secondgirl} alt="Outfit Suggestion" />
      </ErviceCard>

      <RviceCard>
      <RviceImage src={Thirdgirl} alt="Outfit Suggestion" />
        <RviceContent>
          <h3>Virtual Closet</h3>
          <p>
          Organize and plan your wardrobe effortlessly with our virtual closet, designed to help you curate your perfect collection of outfits.
          </p>
        </RviceContent>
      </RviceCard>

      {/* <ViceCard>
        <ViceContent>
          <h3>Fashion Trend</h3>
          <p>
          Stay ahead of the curve with our fashion trend insights, tailored to keep your wardrobe fresh and on point.
          </p>
        </ViceContent>
        <ViceImage src={Fourthgirl} alt="Outfit Suggestion" />
      </ViceCard> */}
    </ServicesSection>
  );
};

export default Second;
