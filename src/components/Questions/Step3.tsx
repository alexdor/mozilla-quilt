import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import { Input, Row } from 'reactstrap';
import { getBase64 } from 'src/helpers/helpers';
import { IRootState } from 'src/store/reducers';

import { PictureIcon } from '../PictureIcon';
import { QuestionWrapper } from '../QuestionWrapper';

interface IProps {
  pictureLink: string;
  onChange: any;
  defaultValue: any;
  color: string;
  links: any[];
}

const Step3 = ({
  color,
  onChange,
  pictureLink,
  defaultValue,
  links
}: IProps) => {
  const onPictureChange = async () => {
    try {
      return onChange({ target: { value: await getBase64("story-picture") } });
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error("Error: ", error);
      return Alert.error("Failed to upload your file");
    }
  };

  return (
    <QuestionWrapper color={color} key="3" title="Attach a photo to your story">
      <div className="user-input-width file-input-wrapper mx-auto mb-4">
        <button
          className={`btn-file-input ${
            defaultValue && defaultValue.substring(0, 4) === "data"
              ? "file-selected"
              : ""
          } `}
        >
          <PictureIcon color={color} />
          {defaultValue ? " Picture selected" : " Upload a Picture"}
        </button>
        <Input
          name="file"
          type="file"
          accept="image/png,image/jgp,image/jpeg"
          onChange={onPictureChange}
          id="story-picture"
        />
      </div>
      {links.length > 0 && (
        <React.Fragment>
          <h4 className="d-flex justify-content-center " style={{ color }}>
            or pick one of our chosen ones:
          </h4>
          <Row>
            {links.map(({ links: link }: any) => (
              <div
                key={link}
                className={`col-12 col-lg-3  col-md-6 d-flex justify-content-center my-2 ${
                  pictureLink && pictureLink !== link ? "not-selected" : ""
                }`}
              >
                <button
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={e => {
                    e.preventDefault();
                    onChange({ target: { value: link } });
                  }}
                  className="btn-no-outline d-flex flex-column align-items-center"
                >
                  <img
                    className=" img-fluid image-custom-thumbnail"
                    src={link}
                  />
                </button>
              </div>
            ))}
          </Row>
        </React.Fragment>
      )}
    </QuestionWrapper>
  );
};

const mapStateToProps = ({ home: { links } }: IRootState) => ({
  links
});

export default connect(mapStateToProps)((React as any).memo(Step3) as React.SFC<
  IProps
>);
