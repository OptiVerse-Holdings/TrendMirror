import React from 'react';
// import Appp8 from '../../assets/linkedin.png';
// import Appp9 from '../../assets/Facebook.png';
// import Appp10 from '../../assets/insta.png';
// import Appp11 from '../../assets/Youtube.png';
import { 
  Container, 
  FooterSection, 
  FooterTitle, 
  FooterText, 
  SocialIcons, 
  SocialIcon, 
  FooterGrid, 
  FooterBrand 
} from './sixth.styles';

const Sixth = () => {
  return (
    <Container>
      <FooterGrid>
        {/* Brand Section */}
        <FooterSection>
          <FooterBrand>TrendMirror</FooterBrand>
          <FooterText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </FooterText>
          <FooterText>© 2024 LandingBox</FooterText>
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
          <FooterTitle>Navigation</FooterTitle>
          <FooterText>Home</FooterText>
          <FooterText>Navigation Item</FooterText>
          <FooterText>Other Nav Item</FooterText>
        </FooterSection>

        {/* Social Media Section */}
        <FooterSection>
          <FooterTitle>Social Media</FooterTitle>
          <FooterText>X</FooterText>
          <FooterText>Facebook</FooterText>
          <FooterText>Instagram</FooterText>
        </FooterSection>
      </FooterGrid>
    </Container>
  );
};

export default Sixth;
