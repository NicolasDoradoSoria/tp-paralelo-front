import {
  GET_SHOWS
  } from "../types";


// eslint-disable-next-line react-refresh/only-export-components
export default (state, action) => {

    switch (action.type) {
        case GET_SHOWS:
            return {
              ...state,
              shows: action.payload,
              loading: true
            };
        default:
            return state;
    }
}