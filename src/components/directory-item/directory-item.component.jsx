import React from 'react';
import Sand from '../../assets/Direc1.png';
import Next2 from '../../assets/Direc2.png';
import Next3 from '../../assets/Direc3.png';
import { FeaturesSection, Title, DSubtext, FeaturesGrid, FeatureCard, FeatureImage, FeatureTitle, FeatureDescription } from './directory-item.styles';

const DirectoryItem = () => {
  const text = "From virtual try-ons to personalized recommendations, explore the features that make shopping smarter, faster, and tailored just for you.";
  const words = text.split(' ');

  const featureData = [
    {  
      title: 'Take or Upload a Full-Body Photo to Get Started',
      description: 'Snap or upload a full-body photo of yourself to start the magic.',
      imgSrc: Sand,
    },
    {
      title: 'Paste the Link to the Item You Want to Try',
      description: 'Copy the link of the clothing or accessory you love and paste it here.',
      imgSrc: Next2,
    },
    {
      title: 'Watch Your Photo Transform with the Selected Item',
      description: 'TrendMirror applies the item to your photo so you can see how it looks on you.',
      imgSrc: Next3,
    },
  ];

  return (
    <FeaturesSection>
      <Title>All the Tools You Need for a Smarter Shopping</Title>
      <DSubtext>
      {words.map((word, index) => (
              <span key={index} style={{ '--index': index }}>
                {word}&nbsp;
              </span>
            ))}
      </DSubtext>
      <FeaturesGrid>
        {featureData.map((feature, index) => (
          <FeatureCard key={index} delay={`${index * 0.3}s`}>
            <FeatureImage src={feature.imgSrc} alt={feature.title} />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}  
      </FeaturesGrid>
    </FeaturesSection>
  );
};  

export default DirectoryItem;
