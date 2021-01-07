
import {SET_BODY} from "../actionType/body";

const initialState = {
info:{}
};

export default function bodyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BODY:
      return {
        ...state,
        info: action.payload,
      };
  
   
    default:
      return state;
  }
}
