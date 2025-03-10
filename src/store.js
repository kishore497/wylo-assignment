import { createStore } from 'redux';

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return { ...state, posts: [...state.posts, action.payload] };
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
