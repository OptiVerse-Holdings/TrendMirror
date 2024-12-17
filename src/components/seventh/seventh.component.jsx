import React from 'react';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HeroContainer, Header, Conten, Brand, MenuButton, Content, TextContent, Heading, Subtext, DownloadButton, Icon, ImageContent, ModelImage } from './seventh.styles';

import  Appp from '../../assets/ColorDownload.png';
import  Apppp from '../../assets/fashion-main.png';

const Seventh = () => {
    const text = "TrendMirror lets you see how the latest fashion looks on you before you buy. Upload your photo, paste a product link, and experience a whole new way of shopping.";
    const words = text.split(' '); 

    return (
    <Content> 
        <TextContent>
          <Heading>Step Into the Future of Fashion</Heading>
          <Subtext>
          {words.map((word, index) => (
              <span key={index} style={{ '--index': index }}>
                {word}&nbsp;
              </span>
            ))}
          </Subtext>
          <DownloadButton href="#">
            <Icon src={Appp} />
          </DownloadButton>
        </TextContent>
        <ImageContent>
          <ModelImage src={Apppp} />
        </ImageContent>
      </Content>
       )
        };   
               
export default Seventh;
