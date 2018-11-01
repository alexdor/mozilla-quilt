import '../../../styles/faq.css';

import React from 'react';
import { connect } from 'react-redux';
import { getImageLinks, getQA } from 'src/routes/Home/modules/homeReducer';
import { IRootState } from 'src/store/reducers';

import Divider from '../../../components/Divider';
import FAQComponent from '../../../components/FAQComponent';

class FAQ extends React.PureComponent<
  {
    readonly getQA: () => any;
    readonly getImageLinks: () => any;
    qa: any[];
  },
  {}
> {
  public componentDidMount() {
    this.props.getQA();
    this.props.getImageLinks();
  }
  public render() {
    return (
      <section className="container mb-5 faq-container">
        <h2 className="py-4  faq-title">Frequently Asked Questions</h2>
        <div className="p-4">
          {this.props.qa.map((qa, index) => [
            <React.Fragment key={index}>
              {index !== 0 && <Divider />}
            </React.Fragment>,
            <FAQComponent
              key={qa.title}
              question={qa.title}
              text={qa.description}
            />
          ])}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ home: { qa } }: IRootState) => ({
  qa
});
const mapDispatchToProps = {
  getQA,
  getImageLinks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FAQ);
