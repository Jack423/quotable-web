import {
  SET_PROFILE,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_PROFILE,
  LIKE_POST,
  UNLIKE_POST,
  MARK_NOTIFICATIONS_READ
} from '../types';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  like: {},
  notifications: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_PROFILE:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_PROFILE:
      return {
        ...state,
        loading: true
      };
    case LIKE_POST:
      return {
        ...state,
        likes: [
          ...state.likes,
          action.payload
        ]
      };
    case UNLIKE_POST:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.postId !== action.payload.postId
        )
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach((not) => (not.read = true));
      return {
        ...state
      };
    default:
      return state;
  }
}