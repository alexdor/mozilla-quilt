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
const Step1 = ({ color, onChange, defaultValue }: IProps) => (
  <QuestionWrapper
    color={color}
    key="2"
    title="With a healthier Internet I'm able to..."
  >
    <Input
      type="textarea"
      maxLength={280}
      placeholder="What can you achieve?"
      className="w-100 post-story-input"
      onChange={onChange}
      defaultValue={defaultValue}
    />
  </QuestionWrapper>
);

export default (React as any).memo(Step1);
