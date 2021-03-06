import Alert from 'react-s-alert';
import { Dispatch } from 'redux';
import { ActionType, createAction, getType } from 'typesafe-actions';

import { makeCall } from '../../../helpers/caller';
import { Types } from '../../../helpers/consts';
import { IRootState } from '../../../store/reducers';

export interface IHomeState {
  readonly stories: IStory[];
  readonly pagination: IPagination | { page: number };
  readonly loading: boolean;
  readonly qa: any[];
  readonly links: any[];
}

export interface IStory {
  user: {
    [key: string]: string;
  };
  id: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  type: Types;
  country: string;
  work_on: string;
  im_able: string;
  picture?: string;
  user_name: string;
  user_photo?: string;
  user_id?: string;
}

export interface IPagination {
  page: number;
  per_page: number;
  offset: number;
  total_entries_size: number;
  current_entries_size: number;
  total_pages: number;
}
// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------
export const setStories = createAction(
  "@@mozilla_quilt/GET_STORIES",
  resolve => (payload: { data: IStory[]; pagination: IPagination }) =>
    resolve(payload)
);

export const setQA = createAction(
  "@@mozilla_quilt/GET_IMAGES",
  resolve => (payload: { data: any[] }) => resolve(payload)
);

export const setLinks = createAction(
  "@@mozilla_quilt/GET_LINKS",
  resolve => (payload: { data: any[] }) => resolve(payload)
);

const loading = createAction("@@mozilla_quilt/STORIES_LOADING");

const stopLoading = createAction("@@mozilla_quilt/STORIES_STOP_LOADING");

export const getStories = (
  additionalParams: { [key: string]: string | number | boolean },
  restartPagination?: boolean
) => (dispatch: Dispatch, getState: () => IRootState) => {
  dispatch(loading());
  const page = restartPagination ? 1 : getState().home.pagination.page + 1 || 1;
  return makeCall({
    call: { section: "stories", job: "get" },
    params: { page, per_page: 17, ...additionalParams }
  })
    .then((res: { data: IStory[]; pagination: IPagination }) =>
      dispatch(setStories(res))
    )
    .catch(e => {
      Alert.error(e.message);
      dispatch(stopLoading());
    });
};

export const getImageLinks = () => (dispatch: Dispatch) => {
  return makeCall({
    call: { section: "imageLinks", job: "get" }
  })
    .then((res: { data: any[] }) => dispatch(setLinks(res)))
    .catch(e => {
      Alert.error(e.message);
    });
};

export const getQA = () => (dispatch: Dispatch) => {
  return makeCall({
    call: { section: "qa", job: "get" }
  })
    .then((res: { data: any[] }) => dispatch(setQA(res)))
    .catch(e => {
      Alert.error(e.message);
    });
};

export const actions = { setStories, loading, stopLoading, setQA, setLinks };

export type RootAction = ActionType<typeof actions>;

// --------------------------------------------------
// Reducer
// --------------------------------------------------
const initialState: Partial<IHomeState> = {
  stories: [],
  pagination: { page: 0 },
  loading: true,
  qa: [],
  links: []
};
export default (state = initialState, action: RootAction) => {
  switch (action.type) {
    case getType(actions.setStories):
      return {
        ...state,
        stories: [...(state.stories || []), ...action.payload.data],
        pagination: action.payload.pagination,
        loading: false
      };
    case getType(actions.setQA):
      return {
        ...state,
        qa: action.payload.data
      };
    case getType(actions.setLinks):
      return {
        ...state,
        links: action.payload.data
      };
    case getType(actions.loading):
      return { ...state, loading: true };
    case getType(actions.stopLoading):
      return { ...state, loading: false };
    default:
      return state;
  }
};
