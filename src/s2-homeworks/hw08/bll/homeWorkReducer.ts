import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      let copyState = [...state];
      if (action.payload === "up") {
        return copyState.sort((a: UserType, b: UserType) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
      } else {
        return copyState.sort((a: UserType, b: UserType) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      }
    }
    case "check": {
      return state.filter((u) => u.age > 18);
    }
    default:
      return state;
  }
};
