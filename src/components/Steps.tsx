import React from 'react';

import { Types } from '../helpers/consts';
import Step0 from './Questions/Step0';
import Step1 from './Questions/Step1';
import Step2 from './Questions/Step2';
import Step3 from './Questions/Step3';
import Step4 from './Questions/Step4';
import Step5 from './Questions/Step5';

export const steps: any = (
  step: number,
  type: Types,
  onChange: any,
  defaultValue: any,
  pictureLink: string,
  color: string
) => {
  const views = [
    <Step0 key="0" color={color} onChange={onChange} type={type} />,
    <Step1
      key="1"
      color={color}
      onChange={onChange}
      type={type}
      defaultValue={defaultValue}
    />,
    <Step2
      key="2"
      color={color}
      onChange={onChange}
      defaultValue={defaultValue}
    />,
    <Step3
      key="3"
      color={color}
      onChange={onChange}
      pictureLink={pictureLink}
      defaultValue={defaultValue}
    />,
    <Step4
      key="4"
      color={color}
      onChange={onChange}
      defaultValue={defaultValue}
    />,
    <Step5
      key="5"
      color={color}
      onChange={onChange}
      type={type}
      defaultValue={defaultValue}
    />
  ];
  return views[step];
};
