import React from 'react';
import ReactMarkdown from 'react-markdown';

const FAQComponent: React.SFC<{ text: string; question: string }> = ({
  text,
  question
}) => (
  <div className="faq-component mb-4">
    <h3 className="faq-question mb-4 mt-1">{question}</h3>
    <p className="faq-text mb-2">
      <ReactMarkdown source={text} />
    </p>
  </div>
);

export default FAQComponent;
