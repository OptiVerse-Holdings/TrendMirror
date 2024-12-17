import React, { useState } from 'react';
import { FAQSection, SectionTitle, FAQContainer, SectionSubtitle, FAQItem, FAQHeader, IconWrapper, FAQContent } from './fourth.styles';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const Fourth = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is a Virtual Try-On?',
      answer:
        'The Virtual Try-On feature allows you to see how clothing or accessories look on you without physically trying them. Simply upload your photo, and our tool will do the rest.',
    },
    {
      question: 'How does the Virtual Try-On work?',
      answer:
        'Upload a clear photo of yourself, paste the link to the item you want to try, and let our app simulate how it looks on you.',
    },
    {
      question: 'What types of items can I try on?',
      answer:
        'You can try on a wide range of items, including tops, trousers, dresses, bags, shoes, and accessories.',
    },
    {
      question: 'Is the Virtual Try-On feature accurate?',
      answer:
        'Our tool uses advanced technology to provide a realistic visualization, but slight variations may occur due to lighting, fit, and other factors..',
    },
  ];

  return (
    <FAQSection>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <SectionSubtitle>Got Questions? We’ve Got Answers!</SectionSubtitle>
      <FAQContainer>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <FAQHeader onClick={() => toggleFAQ(index)}>
              {faq.question}
              <IconWrapper>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </IconWrapper>
            </FAQHeader>
            <FAQContent isOpen={openIndex === index}>{faq.answer}</FAQContent>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

export default Fourth;
