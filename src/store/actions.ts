import { ActionTypes, CHANGE_VIEW, ViewOption } from "./types";

export const changeView = (view: ViewOption): ActionTypes => {
  return {
    type: CHANGE_VIEW,
    payload: view,
  };
};
