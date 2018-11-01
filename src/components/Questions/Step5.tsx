import React from 'react';

import { Types } from '../../helpers/consts';
import { QuestionWrapper } from '../QuestionWrapper';
import { UserUpload } from './UserUpload';

interface IProps {
  type: Types;
  onChange: any;
  defaultValue: any;
  color: string;
}

const Step3 = ({ color, onChange, defaultValue }: IProps) => {
  return (
    <QuestionWrapper
      color={color}
      key="4"
      title="Finally, some (optional) info about you"
      subtitle="Add your name here so that we can include it with your story, we will only post your first name and last initial"
    >
      <UserUpload
        updateParentState={onChange}
        user={defaultValue}
        color={color}
      />
    </QuestionWrapper>
  );
};

export default (React as any).memo(Step3);
