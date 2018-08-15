import * as React from "react";
import { Row } from "reactstrap";
import Story from "../../../components/Story";
import { storieListMockData } from "../../../helpers/mockData";
import "../../../styles/home.css";
interface IHomeProps {
  readonly getStories: () => any;
}
export default class Home extends React.PureComponent<
  IHomeProps,
  {
    readonly focusSelect: boolean;
  }
> {
  public readonly state = { focusSelect: false };

  public componentDidMount(): void {
    this.props.getStories();
  }

  public render() {
    return (
      <div className="home-container">
        <section className="home-section home-stories">
          <Row>
            {storieListMockData.map((story, index) => (
              <Story
                key={story.id}
                index={index}
                type={story.type}
                country={story.country}
                workOn={story.work_on}
                imAble={story.im_able}
                imgUrl={story.picture}
                userName={story.user_name}
                postedAt={story.posted_at}
                userImg={story.user_photo}
              />
            ))}
          </Row>
        </section>
      </div>
    );
  }
}
