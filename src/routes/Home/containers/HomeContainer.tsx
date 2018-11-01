import { connect } from 'react-redux';

import { IRootState } from '../../../store/reducers';
import Home from '../components/Home';
import { getImageLinks, getQA, getStories } from '../modules/homeReducer';

const mapDispatchToProps = {
  getStories,
  getQA,
  getImageLinks
};
const mapStateToProps = (state: IRootState) => ({
  stories: state.home.stories,
  pagination: state.home.pagination,
  loading: state.home.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home as any);
