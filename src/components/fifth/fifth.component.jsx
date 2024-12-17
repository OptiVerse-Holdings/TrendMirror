import React from 'react';
import { Container, TextSection, Title, Subtitle, DownloadButton, AppPreview, AppImage, Icon } from './fifth.styles';
import  Appp5 from '../../assets/ColorDownload.png';
// import  Appp6 from '../../assets/12phone 1.png';

const DownloadAppButton = () => (
  <DownloadButton>
    <Icon src={Appp5} />
  </DownloadButton>
);

const Fifth = () => {
  return (
    <Container>
      <TextSection>
        <Title>Ready to See Yourself in Style?</Title>
        <Subtitle>
        Discover how your favorite outfits look on you before you buy. Upload your photo, select an item, and let our Virtual Try-On bring your style to life.
        </Subtitle>
        <DownloadAppButton />
      </TextSection>
      <AppPreview>
        {/* <AppImage src={Appp6} alt="TrendMirror App Preview" /> */}
      </AppPreview>
    </Container>
  );
};

export default Fifth;
