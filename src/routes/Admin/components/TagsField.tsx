import * as React from "react";
import { addField } from "react-admin";
import { Field } from "redux-form";

export const TagsField = (props: any) => {
  if (!props || !props.record) {
    // tslint:disable
    console.log("====================================");
    console.log(props);
    console.log("====================================");
    return <div />;
  }
  console.log("====================================");
  console.log(props);
  console.log("====================================");
  return (
    <ul>
      {(props.record.tags || []).map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
const renderField = (props: any, ...custom: any[]) => (
  <div>
    {console.log(props)}
    <label>{props.label}</label>
    <div>
      <input
        {...props.input}
        type={props.type}
        placeholder={props.label}
        defaultValue={props.defaultValue}
        {...custom}
      />
    </div>
  </div>
);
const TagsEdit = (props: any, ...custom: any[]) => {
  console.log("====================================");
  console.log(props, custom);
  console.log("====================================");
  return (
    <React.Fragment>
      <Field
        name="tags"
        type="text"
        component={renderField}
        defaultValue={props.tags}
      />
      {props.meta.error && <li className="error">{props.meta.error}</li>}
    </React.Fragment>
  );
};

export default addField(TagsEdit);
