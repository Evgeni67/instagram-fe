// user: {
//     email: "",
//     userName: "",
//     profilePicUrl: "",
//     posts: [],
//     comments: [],
//     likedPosts: [],
//     likedComments: [],
//     follows: [],
//folowers:[] missing on be

//   },


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
          likedComments: state.liked.filter((album) => album.id !== action.payload),
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
        // case "SET_E_MAIL":
        //   return {
        //     ...state,
        //    email: action.payload,
        //   };
        //   case "SET_USERNAME":
        //   return {
        //     ...state,
        //    userName: action.payload,
        //   };
        //   case "SET_NAME":
        //   return {
        //     ...state,
        //    name: action.payload,
        //   };
        //   case "SET_SURNAME":
        //     return {
        //       ...state,
        //      surname: action.payload,
        //     };
        //   case "SET_profilePicUrl":
        //       return {
        //         ...state,
        //         profilePicUrl: action.payload,
        //       };
        //       case "SET_FOLLOWS":
        //       return {
        //         ...state,
        //       follows: action.payload,
        //       };
        //       case "SET_FOLLOWERS":
        //       return {
        //         ...state,
        //        followers: action.payload,
        //       };
        //       case "SET_MY_POSTS":
        //       return {
        //         ...state,
        //        myposts: action.payload,
        //       };
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
