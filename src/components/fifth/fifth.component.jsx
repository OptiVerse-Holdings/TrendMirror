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
        <Title>Step Into the Future of Fashion</Title>
        <Subtitle>
        TrendMirror lets you see how the latest fashion looks on you before you buy. Upload your photo, paste a product link, and experience a whole new way of shopping.
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
