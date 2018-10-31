import { distanceInWordsToNow } from 'date-fns';
import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from 'reactstrap';

import Expand from '../assets/Expand';
import Pin from '../assets/Pin';
import { Types, types } from '../helpers/consts';

export interface IStoryProps {
  type: Types;
  country: string;
  workOn: string;
  imAble: string;
  imgUrl?: string;
  userName?: string;
  userImg?: string;
  postedAt: string;
  index: number;
}

interface IState {
  expanded: boolean;
}

export default class Story extends React.PureComponent<IStoryProps, IState> {
  public state = {
    expanded: false
  };

  public render() {
    const {
      index,
      type,
      country,
      imgUrl,
      workOn,
      imAble,
      userName,
      userImg,
      postedAt
    } = this.props;
    const cardType = types[type];
    if (!cardType) {
      return <div />;
    }
    const icon = (
      <img
        className="small-icon"
        src={cardType.icon}
        alt={`${cardType.title} icon`}
      />
    );

    const { expanded } = this.state;
    return (
      <Col
        onClick={this.toggleExpanded}
        md="6"
        lg="4"
        sm="12"
        className={`home-story-container c-pointer mb-3 ${
          index % 3 === 1 ? "mt-5" : ""
        }`}
      >
        <Card
          className={`home-story ${type as string} ${
            expanded ? "expanded" : ""
          }`}
        >
          <CardImg
            top={true}
            width="100%"
            src={
              imgUrl ||
              "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            }
            alt="Card image cap"
          />
          <div className="home-story-country">
            <div className="home-story-country-content d-flex align-items-center">
              <Pin />
              <span className="mr-3">{country}</span>
            </div>
          </div>
          <CardBody className="px-4">
            <CardTitle>I contribute to {cardType.title} by..</CardTitle>
            <CardText className="home-story-description">{workOn}</CardText>
            {expanded ? (
              <React.Fragment>
                <hr />
                <CardTitle>
                  I contribute to {cardType.title}
                  by...
                </CardTitle>
                <CardText className="home-story-description">{imAble}</CardText>
                <div className="d-flex justify-content-between align-items-center home-story-bottom-bar">
                  <div>
                    <img
                      src={userImg}
                      className="rounded-circle user-photo"
                      alt="user avatar"
                    />
                    <span>{userName}</span>
                  </div>
                  <div className="d-flex">
                    <span className="mr-2 my-auto">
                      {distanceInWordsToNow(postedAt)} ago
                    </span>
                    {icon}
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="d-flex justify-content-between">
                  <button
                    className="no-color-button c-pointer d-flex justify-content-between"
                    onClick={this.toggleExpanded}
                  >
                    <Expand />
                  </button>
                  {icon}
                </div>
                <div className="home-story-bottom-bar" />
              </React.Fragment>
            )}
          </CardBody>
        </Card>
      </Col>
    );
  }

  private toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.setState(state => ({ expanded: !state.expanded }));
  };
}
