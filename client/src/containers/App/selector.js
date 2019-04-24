import { createSelector } from 'reselect';


const getLearningCapacity = (state) => {
  const { mark } = state.app;
  if (!mark) return false;
  if (mark >= 0 && mark <= 10) {
    if (mark >= 8) return 1;
    if (mark >= 6.5) return 2;
    if (mark >= 5) return 3;
    if (mark >= 3.5) return 4;
    return 5;
  }
  return false;
};

const getConduct = (state) => {
  const { conductMark } = state.app;
  if (!conductMark) return false;
  if (conductMark >= 0 && conductMark <= 10) {
    if (conductMark >= 8) return 1;
    if (conductMark >= 6.5) return 2;
    if (conductMark >= 5) return 3;
    if (conductMark >= 3.5) return 4;
    return 5;
  }
  return false;
};

export const makeGetClassification = () => createSelector(
  [
    getLearningCapacity,
    getConduct,
  ],
  (learningCapacityType, conductType) => {
    const classification = {
      1: 'Xếp loại giỏi.',
      2: 'Xếp loại khá.',
      3: 'Xếp loại trung bình.',
      4: 'Xếp loại yếu.',
      5: 'Xếp loại kém, ở lại lớp.',
    };

    const type = learningCapacityType - conductType;

    if (!learningCapacityType && !conductType) {
      return 'Thông tin không hợp lệ, vui lòng nhập lại !!';
    }

    if (type >= 0) return classification[learningCapacityType];
    return classification[learningCapacityType + (type + 1) * (-1)];
  },
);
