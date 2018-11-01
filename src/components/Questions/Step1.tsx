import React from 'react';
import { Input } from 'reactstrap';

import { Types } from '../../helpers/consts';
import { QuestionWrapper } from '../QuestionWrapper';

interface IProps {
  type: Types;
  onChange: any;
  defaultValue: any;
  color: string;
}
const Step1 = ({ color, onChange, type, defaultValue }: IProps) => (
  <QuestionWrapper
    color={color}
    key="1"
    title={`I am working on ${type} by...`}
  >
    <Input
      type="textarea"
      maxLength={280}
      placeholder="What are you going to help?"
      className="w-100 post-story-input"
      onChange={onChange}
      defaultValue={defaultValue}
    />
  </QuestionWrapper>
);

export default (React as any).memo(Step1);
