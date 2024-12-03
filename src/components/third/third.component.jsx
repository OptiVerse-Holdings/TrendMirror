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
      text: 'Amat minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      name: 'Name Lastname 1',
      position: 'Position @ Company 1',
    },
    {
      avatar: secondc,
      text: 'Amat minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      name: 'Name Lastname 2',
      position: 'Position @ Company 2',
    },
    {
      avatar: thirdc,
      text: 'Amat minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      name: 'Name Lastname 3',
      position: 'Position @ Company 3',
    },
    {
      avatar: fourthc,
      text: 'Amat minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      name: 'Name Lastname 4',
      position: 'Position @ Company 4',
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
