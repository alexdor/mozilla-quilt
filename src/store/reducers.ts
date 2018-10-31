import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';

import homeReducer, { IHomeState } from '../routes/Home/modules/homeReducer';
import { history } from './createStore';

export interface IRootState {
  home: IHomeState;
  router: RouterState;
}
const reducer = combineReducers({
  home: homeReducer
});
export class ReducerRegistry {
  public makeRootReducer = () => connectRouter(history)(reducer);
}

const reducerRegistry = new ReducerRegistry();
export default reducerRegistry;
