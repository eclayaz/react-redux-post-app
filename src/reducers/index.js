// This is the root reducer
// where it combines all the reducers

import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer
});
