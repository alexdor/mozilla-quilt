import React from 'react';
import FormGroup from 'reactstrap/lib/FormGroup';

export interface IQuestionWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactChild;
  color: string;
}

export const QuestionWrapper = (React as any).memo(
  ({ title, children, subtitle, color }: IQuestionWrapperProps) => (
    <FormGroup className="p-4 d-flex flex-column align-items-center">
      <h3 style={{ color }} className="question-wrapper-title">
        {title}
      </h3>
      {subtitle && (
        <span className="question-wrapper-subtitle">{subtitle}</span>
      )}
      <div className="mt-4 w-100">{children}</div>
    </FormGroup>
  )
);
