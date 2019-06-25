import { pageTransition } from "../stores/pageTransition";

export const pageTransitionHelper = () => {
  pageTransition.set(true);
  return () => {
    pageTransition.set(false);
  };
};
