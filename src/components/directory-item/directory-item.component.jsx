import React from 'react';
import Sand from '../../assets/Sandy.png';
import Next2 from '../../assets/next2.png';
import Next3 from '../../assets/next3.png';
import { FeaturesSection, Title, FeaturesGrid, FeatureCard, FeatureImage, FeatureTitle, FeatureDescription } from './directory-item.styles';

const DirectoryItem = () => {
  const featureData = [
    {
      title: 'Styling Suggestions',
      description: 'Get personalized styling tips and recommendations. This feature analyzes your existing items and suggests trending combinations.',
      imgSrc: Sand,
    },
    {
      title: 'Wardrobe Analytics',
      description: 'Easily categorize and manage your clothes. With a visual overview of your wardrobe, you can see all items at a glance.',
      imgSrc: Next2,
    },
    {
      title: 'Styling Suggestions',
      description: 'Plan outfits effortlessly with smart suggestions based on your wardrobe. This feature saves time by providing tailored combinations that match.',
      imgSrc: Next3,
    },
  ];

  return (
    <FeaturesSection>
      <Title>Features</Title>
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
