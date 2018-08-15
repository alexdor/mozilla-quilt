import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import Home from "../components/Home";
import { getStories } from "../modules/homeReducer";
const mapDispatchToProps = {
  getStories
};
const mapStateToProps = (_: IRootState) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home as any);
