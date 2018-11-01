import React from 'react';
import Select from 'react-select';

import { Types } from '../../helpers/consts';
import { countryList } from '../../helpers/countryList';
import { QuestionWrapper } from '../QuestionWrapper';

interface IProps {
  type: Types;
  onChange: any;
  defaultValue: any;
  color: string;
}
const Step4 = ({ color, onChange, defaultValue }: IProps) => (
  <QuestionWrapper color={color} key="3" title="What is your country?">
    <Select
      defaultValue={defaultValue}
      options={countryList}
      onChange={onChange}
      placeholder="Select your country"
      className="w-100"
    />
  </QuestionWrapper>
);

export default (React as any).memo(Step4);
