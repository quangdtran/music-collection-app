import { UPDATE_MARK_AND_CONDUCT_MARK } from './constants';

export const updateMarkAndConductMarkAction = ({ mark, conductMark }) => {
  return {
    type: UPDATE_MARK_AND_CONDUCT_MARK,
    payload: {
      mark,
      conductMark,
    },
  };
};
