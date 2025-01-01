import React from 'react';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HeroContainer, Header, Brand, MenuButton, Content, TextContent, Heading, Subtext, DownloadButton, Icon, ImageContent, ModelImage } from './navigation.styles';
import  Appp from '../../assets/ColorDownload.png';
import  Apppp from '../../assets/fashion-main.png';

const Navigation = () => {
  const text = "TrendMirror lets you see how the latest fashion looks on you before you buy. Upload your photo, paste a product link, and experience a whole new way of shopping.";
  const words = text.split(' ');
  
  return (
    <Fragment>
    <HeroContainer>
      <Header>
        <Brand>Steezely</Brand>
        <MenuButton>☰</MenuButton>
      </Header>
    </HeroContainer>
    <Outlet/>
    </Fragment>

  );
};

export default Navigation;