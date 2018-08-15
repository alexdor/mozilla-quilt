import { createAction } from "typesafe-actions";

export interface IHomeState {
  readonly language: string[];
  readonly type: string;
  readonly experience_needed: string;
}

// ------------------------------------
// Actions
// ------------------------------------
export enum HomeActions {
  GET_STORIES = "@@mozilla_quilt/GET_STORIES"
}

// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------
export const getStories = createAction(
  HomeActions.GET_STORIES,
  resolve => (languages: string[]) => resolve(languages)
);

// --------------------------------------------------
// Action Handlers
// --------------------------------------------------
export const ACTION_HANDLERS = {
  [HomeActions.GET_STORIES]: (state: IHomeState, { payload }: any) => ({
    ...state,
    language: payload
  })
};
// --------------------------------------------------
// Reducer
// --------------------------------------------------
const initialState: Partial<IHomeState> = {};
export default function homeReducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
