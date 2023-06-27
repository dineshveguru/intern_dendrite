export type ViewOption = "Home" | "Playlists" | "Search" | "Favourites";

export interface RootState {
  selectedView: ViewOption;
}

export const CHANGE_VIEW = "CHANGE_VIEW";

interface ChangeViewAction {
  type: typeof CHANGE_VIEW;
  payload: ViewOption;
}

export type ActionTypes = ChangeViewAction;
