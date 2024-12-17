import React from 'react';

import  Appp7 from '../../assets/InstaF.png';
import  Appp8 from '../../assets/XF.png';
import  Appp9 from '../../assets/FacebookF.png';
import  Appp10 from '../../assets/LinkedInF.png';

import { Icon } from './sixth.styles';

import { 
  Container, 
  FooterSection, 
  FooterTitle, 
  FooterText,
  OoterText, 
  SocialIcons, 
  SocialIcon, 
  FooterGrid, 
  FooterBrand,
  Footer1,
  OwnloadButton,
  WnloadButton,
  NloadButton,
  LoadButton,
  Footer2
} from './sixth.styles';

const OwnloadAppButton = () => (
  <OwnloadButton>
    <Icon src={Appp7} />
  </OwnloadButton>
);

const WnloadAppButton = () => (
  <WnloadButton>
    <Icon src={Appp8} />
  </WnloadButton>
);

const NloadAppButton = () => (
  <NloadButton>
    <Icon src={Appp9} />
  </NloadButton>
);

const LoadAppButton = () => (
  <LoadButton>
    <Icon src={Appp10} />
  </LoadButton>
);

const Sixth = () => {
  return (
    <Container>
      <FooterGrid>
        {/* Brand Section */}
        <FooterSection>
          <FooterBrand>TrendMirror</FooterBrand>
          <OoterText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </OoterText>
        <Footer2>© 2024 LandingBox</Footer2>

        </FooterSection>

        {/* Contact Section */}
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>9565 S. Railroad Dr.</FooterText>
          <FooterText>Spring Valley, NY 10977</FooterText>
          <FooterText>United States</FooterText>
          <FooterText>0800 01234 5678</FooterText>
        </FooterSection>

        {/* Navigation Section */}
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterText>Terms</FooterText>
          <FooterText>Privacy</FooterText>
        </FooterSection>

        {/* Social Media Section */}
        <FooterSection>
          <FooterTitle>Social media</FooterTitle>
          <OwnloadAppButton />
          <WnloadAppButton />
          <NloadAppButton />
          <LoadAppButton />
        </FooterSection>

          <Footer1>TrendMirror</Footer1>
      </FooterGrid>
    </Container>
  );
};

export default Sixth;
