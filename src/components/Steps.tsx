import * as React from 'react';
import Select from 'react-select';
import { Input } from 'reactstrap';

import { Types, types } from '../helpers/consts';
import { countryList } from '../helpers/countryList';
import { QuestionWrapper } from './QuestionWrapper';
import { UserUpload } from './UserUpload';

export const steps: any = (
  step: number,
  type: Types,
  onChange: any,
  defaultValue: any,
  color: string
) => {
  const views = [
    <QuestionWrapper
      title="What issue are you working on?"
      color={color}
      key="0"
    >
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
    </QuestionWrapper>,
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
    </QuestionWrapper>,
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
    </QuestionWrapper>,
    <QuestionWrapper color={color} key="3" title="What is your country?">
      <Select
        defaultValue={defaultValue}
        options={countryList}
        onChange={onChange}
        placeholder="Select your country"
        className="w-100"
      />
    </QuestionWrapper>,
    <QuestionWrapper
      color={color}
      key="4"
      title="Finally, some (optional) info about you"
      subtitle="Add your name here so that we can include it with your story, we will only post your first name and last initial"
    >
      <UserUpload updateParentState={onChange} user={defaultValue} />
    </QuestionWrapper>
  ];
  return views[step];
};
