import * as types from "../actionType/body";


export const setBody = (payload) => {
    return {
      type: types.SET_BODY,
      payload,
    };
  };