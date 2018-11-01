import debounce from 'lodash.debounce';
import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import { Form } from 'reactstrap';
import { getBase64 } from 'src/helpers/helpers';

import { makeCall } from '../helpers/caller';
import { Types, types } from '../helpers/consts';
import Success from './Questions/Success';
import { IUser } from './Questions/UserUpload';
import { steps } from './Steps';

// FIXME: Add typings
interface IState {
  step: number;
  type?: Types;
  work_on?: string;
  im_able?: string;
  country?: string;
  done?: boolean;
  user?: IUser;
  counter: number;
}

const TOTAL_STEPS = 5; // Counting from 0

const stepKeyMapping = [
  "type",
  "work_on",
  "im_able",
  "picture",
  "country",
  "user"
];

class PostYourStory extends React.PureComponent<any, IState> {
  public state = {
    step: 0,
    type: undefined,
    counter: 0,
    user: { anonymous: true, privacy: false },
    done: false,
    picture: undefined
  };

  public render() {
    const { step, type, counter, done } = this.state;
    const { closeModal } = this.props;
    const color = ((types[type as any] as any) || {}).color;
    return done ? (
      <Success closeModal={closeModal} background={color} />
    ) : (
      <div className="d-flex flex-column justify-content-center post-story-modal-wrapper">
        <div className="p-4 justify-content-center d-flex flex-column">
          <Form className="w-100">
            {steps(
              step,
              type,
              this.onChange,
              this.state[stepKeyMapping[step]],
              this.state.picture,
              step !== 0 ? color : ""
            )}
          </Form>
          {[1, 2].includes(step) && (
            <span className="d-block ml-auto text-right">
              {counter}
              /280 characters
            </span>
          )}
        </div>
        <div
          style={{
            backgroundColor: type && step > 0 ? color || "#d086d6" : "#d086d6"
          }}
          className="modal-footer mt-4 justify-content-between"
        >
          <button
            className="modal-footer-btn"
            onClick={step === 0 ? closeModal : this.handleBack}
          >
            {step === 0 ? "Cancel" : "Back"}
          </button>

          <button
            disabled={!this.state[stepKeyMapping[step]]}
            className="modal-footer-btn"
            onClick={step === TOTAL_STEPS ? this.save : this.handleNext}
          >
            {step === TOTAL_STEPS ? "Post" : "Next"}
          </button>
        </div>
      </div>
    );
  }

  private handleBack = () => {
    this.setState(state => ({
      step: state.step - 1,
      counter: (state[stepKeyMapping[state.step - 1]] || "").length
    }));
  };

  private handleNext = () => {
    this.setState(state => ({
      step: state.step + 1,
      counter: 0
    }));
  };

  private onChange = (event: any) => {
    const key = stepKeyMapping[this.state.step];
    const val = key === "country" ? event.value : event.target.value;
    debounce(() => {
      return this.setState(state => ({
        [key]: val,
        counter: (val || "").length,
        step: state.step
      }));
    }, 200)();
  };

  private save = async () => {
    const params = JSON.parse(JSON.stringify(this.state));
    if (!(params.user || {}).privacy) {
      Alert.error("You need to concents with our Privacy Note");
      return;
    }
    if ((params.user || {}).picture as File) {
      try {
        params.user.picture = await getBase64("picture");
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.error("Error: ", error);
        return Alert.error("Failed to upload your file");
      }
    }

    return makeCall({
      call: { section: "stories", job: "post" },
      params
    })
      .then(() => {
        this.setState({ done: true });
      })
      .catch(e => {
        Alert.error(e.message);
      });
  };
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(PostYourStory);
