import { ActionTypes, CHANGE_VIEW, RootState } from "./types";

const initialState: RootState = {
  selectedView: "Home",
};

const reducer = (state = initialState, action: ActionTypes): RootState => {
  switch (action.type) {
    case CHANGE_VIEW:
      return { ...state, selectedView: action.payload };
    default:
      return state;
  }
};

export default reducer;
