import React from 'react';
import Sand from '../../assets/Second1.png';
import Secondgirl from '../../assets/Second2.png';
import Thirdgirl from '../../assets/Second3.png';
import Fourthgirl from '../../assets/Second4.png'; 

import { ServicesSection, Title, ServiceCard, ErviceCard, RviceCard, ViceCard, ServiceImage, ErviceImage, RviceImage, ViceImage, ServiceContent, ErviceContent, RviceContent, ViceContent     } from './second.styles';

const Second = () => {
  return (
    <ServicesSection>
      <Title>Key Features</Title>
      <ServiceCard>
        <ServiceImage src={Sand} alt="Outfit Suggestion" />
        <ServiceContent>
          <h3>Photo Upload and Customization</h3>
          <p>
          Users can either take a picture directly from their camera or upload an existing full-body photo from their device.  Users can scale the image to match the proportions of the clothing item being tested.
          </p>
        </ServiceContent>
      </ServiceCard>

      <ErviceCard>
        <ErviceContent>
          <h3>AI-Powered Virtual Try-On</h3>
          <p>
          Uses advanced AI to overlay the selected clothing onto the user's uploaded photo, accurately accounting for size, fit, and texture.
          </p>
        </ErviceContent>
        <ErviceImage src={Secondgirl} alt="Outfit Suggestion" />
      </ErviceCard>

      <RviceCard>
      <RviceImage src={Thirdgirl} alt="Outfit Suggestion" />
        <RviceContent>
          <h3>Link Integration for Clothing Items</h3>
          <p>
          Get matched with your perfect style through our personalized shopping experience and shop with ease using our personalized styling services, designed just for you.
          </p>
        </RviceContent>
      </RviceCard>

      <ViceCard>
        <ViceContent>
          <h3>Realistic Fit and Size Guide</h3>
          <p>
          The app analyzes the user’s uploaded photo and matches it with the product dimensions from the link to provide a realistic fit visualization.
          </p>
        </ViceContent>
        <ViceImage src={Fourthgirl} alt="Outfit Suggestion" />
      </ViceCard>
    </ServicesSection>
  );
};

export default Second;
