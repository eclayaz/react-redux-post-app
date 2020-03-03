// This where evaluate actions
// such as fetching posts, create posts

import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

// This will evaluate what types we are dealing with
// action will have a type
export default function(state = initialState, action) {
  // return the current state
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
