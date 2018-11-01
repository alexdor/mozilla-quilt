import React from 'react';

import { Types, types } from '../../helpers/consts';
import { QuestionWrapper } from '../QuestionWrapper';

interface IProps {
  type: Types;
  onChange: any;
  defaultValue: any;
  color: string;
}
const Step0 = ({ color, onChange, type }: IProps) => (
  <QuestionWrapper title="What issue are you working on?" color={color} key="0">
    <div className="row justify-content-center">
      {Object.values(types).map(issueType => (
        <div
          key={issueType.title}
          className={`col-6 col-md-4 d-flex justify-content-center mb-2 mt-2 ${
            type && type !== issueType.key ? "not-selected" : ""
          }`}
        >
          <button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={e => {
              e.preventDefault();
              onChange({ target: { value: issueType.key } });
            }}
            className="btn-no-outline d-flex flex-column align-items-center"
          >
            <img src={issueType.icon} />
            <span className="no-wrap">{issueType.title}</span>
          </button>
        </div>
      ))}
    </div>
  </QuestionWrapper>
);

export default (React as any).memo(Step0);
