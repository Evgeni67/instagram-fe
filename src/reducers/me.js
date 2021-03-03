import { initialState } from "../store";

export default function (state = initialState, action) {
  switch (action.type) {
    case "LIKE_POST":
      return {
        ...state,
        likedPosts: state.liked.concat(action.payload),
      };
    case "REMOVE_LIKE_FROM_POST":
      return {
        ...state,
        likedPosts: state.liked.filter((album) => album.id !== action.payload),
      };
    case "LIKE_COMMENT":
      return {
        ...state,
        likedComments: state.liked.concat(action.payload),
      };
    case "REMOVE_LIKE_FROM_COMMENT":
      return {
        ...state,
        likedComments: state.liked.filter(
          (album) => album.id !== action.payload
        ),
      };
    case "FOLLOW_THE_USER":
      return {
        ...state,
        follows: state.liked.concat(action.payload),
      };
    case "UNFOLLOW_THE_USER":
      return {
        ...state,
        follows: state.liked.filter((album) => album.id !== action.payload),
      };
    case "SET_ME":
      return {
        ...state,
        me: action.payload,
      };
    case "SET_USERS_I_FOLLOWED":
      return {
        ...state,
        myfollowedOnes: action.payload,
      };

    default:
      return state;
  }
}
