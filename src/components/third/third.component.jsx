import React from 'react';
import San from '../../assets/Group 39877.png';
import firstc from '../../assets/Ellipse 2.png';
import secondc from '../../assets/customer photo.png';
import thirdc from '../../assets/thirdm.png';
import fourthc from '../../assets/afrowoman.jpg';
import dotc from '../../assets/dotc.png';
import { TestimonialSection, SectionTitle, TestimonialContainer, SliderWrapper, TestimonialCard, AvatarContainer, Avatar, QuoteIcon, DotIcon, TestimonialText, AuthorName, AuthorPosition } from './third.styles';

const Third = () => {
  const testimonials = [
    {
      avatar: firstc,
      text: 'I’ve always been unsure about online shopping because I never knew how clothes would look on me. The Virtual Try-On changed everything! I could see exactly how the dress fit me before buying it. It’s a game-changer!',
      name: 'James L.',
      position: 'Online Shopper',
    },
    {
      avatar: secondc,
      text: 'This tool has completely transformed my shopping experience. It feels like having a personal fitting room at home. I especially love how realistic it looks—it’s like trying on the clothes for real!',
      name: 'Emily W.',
      position: 'Fashion Enthusiast',
    },
    {
      avatar: thirdc,
      text: 'I’m not tech-savvy, but the Virtual Try-On was so easy to use. I uploaded my photo, added the clothing link, and instantly saw how I looked. It’s perfect for anyone who wants to shop smarter!',
      name: 'Benjamin A.',
      position: 'Satisfied Customer',
    },
    {
      avatar: fourthc,
      text: 'I was surprised at how straightforward the Virtual Try-On was. With just a quick photo upload and a product link, I could see exactly how the outfit would look on me. It’s a fantastic tool for making confident shopping decisions!',
      name: 'Linda G.',
      position: 'Personal Shopper',
    },
  ];

  return (
    <TestimonialSection>
      <SectionTitle>What our customers are saying</SectionTitle>
      <TestimonialContainer>
        <SliderWrapper>
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <TestimonialCard key={index}>
              <AvatarContainer>
                <Avatar src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                <QuoteIcon src={San} />
                <DotIcon src={dotc} />
              </AvatarContainer>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorPosition>{testimonial.position}</AuthorPosition>
            </TestimonialCard>
          ))}
        </SliderWrapper>
      </TestimonialContainer>
    </TestimonialSection>
  );
};

export default Third;
