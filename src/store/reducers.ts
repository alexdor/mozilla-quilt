import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import homeReducer, { IHomeState } from "../routes/Home/modules/homeReducer";
import { history } from "./createStore";

export interface IRootState {
  home: IHomeState;
  router: RouterState;
}

export class ReducerRegistry {
  public makeRootReducer = () =>
    connectRouter(history)(
      combineReducers({
        home: homeReducer
      })
    );
}

const reducerRegistry = new ReducerRegistry();
export default reducerRegistry;
