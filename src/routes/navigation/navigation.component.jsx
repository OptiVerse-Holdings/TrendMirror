import React from 'react';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HeroContainer, Header, Brand, MenuButton, Content, TextContent, Heading, Subtext, DownloadButton, Icon, ImageContent, ModelImage } from './navigation.styles';
import  Appp from '../../assets/AppD.png';
import  Apppp from '../../assets/stand.png';

const Navigation = () => {
  return (
    <Fragment>
    <HeroContainer>
      <Header>
        <Brand>TrendMirror</Brand>
        <MenuButton>☰</MenuButton>
      </Header>
      <Content> 
        <TextContent>
          <Heading>Unlock your personal style with AI-powered Fashion.</Heading>
          <Subtext>
            Discover your perfect fit and get personalized recommendations, curated just for you. Unlock your dream wardrobe with customized style suggestions.
          </Subtext>
          <DownloadButton href="#">
            <Icon src={Appp} />
          </DownloadButton>
        </TextContent>
        <ImageContent>
          <ModelImage src={Apppp} />
        </ImageContent>
      </Content>
    </HeroContainer>
    </Fragment>

  );
};

export default Navigation;