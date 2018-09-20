import '../../../styles/home.css';

import * as React from 'react';
import { Col, Row } from 'reactstrap';

import Story from '../../../components/Story';
import { IPagination, IStory } from '../modules/homeReducer';

interface IHomeProps {
  readonly getStories: () => any;
  stories?: IStory[];
  pagination: IPagination;
  loading: boolean;
}
export default class Home extends React.PureComponent<
  IHomeProps,
  {
    readonly focusSelect: boolean;
  }
> {
  public readonly state = { focusSelect: false };

  public componentDidMount(): void {
    if (!((this.props.stories || []).length > 0)) {
      this.props.getStories();
    }
  }

  public render() {
    const { stories = [], pagination, getStories, loading } = this.props;
    return (
      <div className="home-container">
        <section className="home-section home-stories">
          <Row>
            {stories.map((story, index) => (
              <Story
                key={story.id}
                index={index}
                type={story.type}
                country={story.country}
                workOn={story.work_on}
                imAble={story.im_able}
                imgUrl={story.picture}
                userName={story.user_name}
                postedAt={story.created_at}
                userImg={story.user_photo}
              />
            ))}
            {pagination.page &&
              pagination.page < pagination.total_pages && (
                <Col
                  md="6"
                  lg="4"
                  sm="12"
                  className={`home-story-container c-pointer mb-3 d-flex justify-content-center align-items-start ${
                    stories.length % 3 === 1 ? "mt-5" : ""
                  }`}
                >
                  <button
                    disabled={!!loading}
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => {
                      getStories();
                    }}
                    className="load-more-btn btn"
                  >
                    Load More
                  </button>
                </Col>
              )}
          </Row>
        </section>
      </div>
    );
  }
}
