import {
  ADD_NUMBER,
} from './constants';

export const addAction = number => ({
  type: ADD_NUMBER,
  payload: {
    number: number + 1,
  },
});
