import * as React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import Divider from './Divider';

// tslint:disable-next-line:no-var-requires
const debounce = require("lodash.debounce");
export interface IUser {
  name?: string;
  surname?: string;
  email?: string;
  receive_email_update?: string;
  anonymous?: boolean;
  picture?: string;
  privacy?: boolean;
}
export interface IUserUploadProps {
  updateParentState: (user: any) => any;
  user?: IUser;
}

export class UserUpload extends React.PureComponent<IUserUploadProps, any> {
  public state = {
    name: (this.props.user || {}).name,
    surname: (this.props.user || {}).surname,
    email: (this.props.user || {}).email,
    receive_email_update: (this.props.user || {}).receive_email_update,
    anonymous: (this.props.user || {}).anonymous,
    picture: (this.props.user || {}).picture,
    privacy: (this.props.user || {}).privacy
  };

  public render() {
    const {
      anonymous,
      name,
      surname,
      email,
      picture,
      privacy,
      receive_email_update
    } = this.state;
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center flex-column">
          <FormGroup className="d-flex justify-content-center row mt-4">
            <Input
              className="user-input-width mx-2 post-story-input col-12 col-md-5 mt-2"
              type="text"
              placeholder="Name"
              id="name"
              onChange={this.handleChange}
              defaultValue={name}
            />

            <Input
              className="user-input-width mx-2 post-story-input col-12 col-md-5 mt-2"
              type="text"
              placeholder="Surname"
              id="surname"
              onChange={this.handleChange}
              defaultValue={surname}
            />
          </FormGroup>
          <FormGroup className="d-flex justify-content-center row">
            <Input
              className="post-story-input user-input-width mx-2 col-12 col-md-5 mt-2"
              type="email"
              placeholder="E-mail address"
              id="email"
              onChange={this.handleChange}
              defaultValue={email}
            />
            <div className="user-input-width file-input-wrapper mx-2 col-12 col-md-5 mt-2">
              <button className="btn-file-input">Profile Picture</button>
              <Input
                name="file"
                type="file"
                onChange={this.handleChange}
                defaultValue={picture}
                id="picture"
              />
            </div>
          </FormGroup>
        </div>
        <Divider className="user-divider" />
        <div className="post-user-checks pt-4 mx-5">
          <FormGroup check={true} className="d-flex align-items-center">
            <Input
              type="checkbox"
              id="privacy"
              required={true}
              defaultChecked={!!privacy}
              onChange={this.handleChange}
            />
            <Label className="pl-2" for="privacy">
              I'm okay with Mozilla handling my info as explained in this
              Privacy Notice.
            </Label>
          </FormGroup>
          <FormGroup check={true} className="d-flex align-items-center">
            <Input
              type="checkbox"
              id="receive_email_update"
              defaultChecked={!!receive_email_update}
              onChange={this.handleChange}
            />
            <Label className="pl-2" for="receive_email_update">
              Yes, I want to receive email updates about Mozilla’s campaigns.
            </Label>
          </FormGroup>
          <FormGroup tag="fieldset">
            <FormGroup check={true} className="d-flex align-items-center">
              <Label check={true}>
                <Input
                  onChange={this.handleRadioChange}
                  type="radio"
                  name="notAnonymous"
                  className="mr-2"
                  checked={!anonymous}
                />
                I give permission to reprint my first name and last initial.
              </Label>
            </FormGroup>
            <FormGroup check={true} className="d-flex align-items-center">
              <Label check={true}>
                <Input
                  onChange={this.handleRadioChange}
                  type="radio"
                  name="anonymous"
                  className="mr-2"
                  checked={!!anonymous}
                  id="anonymous"
                />
                Make my submission anonymous.
              </Label>
            </FormGroup>
          </FormGroup>
        </div>
      </React.Fragment>
    );
  }

  private updateParent = () => {
    debounce(
      () =>
        this.props.updateParentState({
          target: {
            value: this.state
          }
        }),
      200
    )();
  };

  private handleChange = (e: any) => {
    const key = e.target.id;

    const val =
      key === "picture"
        ? e.target.files[0]
        : e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
    this.setState({
      [key]: val
    });
    this.updateParent();
  };

  private handleRadioChange = (e: any) => {
    this.setState({
      anonymous: e.target.id === "anonymous"
    });
    this.updateParent();
  };
}
