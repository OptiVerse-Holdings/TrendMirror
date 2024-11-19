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
      question: 'Accordion - FAQs',
      answer:
        'This is an answer to a frequently asked question. A couple more words to specify the subject further, provide more detail and make sure the user understands everything.',
    },
    {
      question: 'Accordion - FAQs',
      answer:
        'This is an answer to a frequently asked question. A couple more words to specify the subject further, provide more detail and make sure the user understands everything.',
    },
    {
      question: 'Accordion - FAQs',
      answer:
        'This is an answer to a frequently asked question. A couple more words to specify the subject further, provide more detail and make sure the user understands everything.',
    },
    {
      question: 'Accordion - FAQs',
      answer:
        'This is an answer to a frequently asked question. A couple more words to specify the subject further, provide more detail and make sure the user understands everything.',
    },
  ];

  return (
    <FAQSection>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <SectionSubtitle>Here are the Answers to Our Most Common FAQs</SectionSubtitle>
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
