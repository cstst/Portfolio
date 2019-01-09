import { HIDE_NAV } from "./types";

export const hideNav = val => {
  return {
    type: HIDE_NAV,
    payload: val
  };
};
