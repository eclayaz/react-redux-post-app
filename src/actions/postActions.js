import { FETCH_POSTS, NEW_POST } from "../actions/types";

// Thunk middleware allows to use or call the dispatch function directly
// so that we can make async requests

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
