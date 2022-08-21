import {
  ADDED,
  ALLCOMPLETED,
  CANCELCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const cancelCompleted = () => {
  return {
    type: CANCELCOMPLETED,
  };
};

export const deleted = (taskId) => {
  return {
    type: DELETED,
    payload: taskId,
  };
};

export const toggled = (taskId) => {
  return {
    type: TOGGLED,
    payload: taskId,
  };
};

export const colorSelected = (taskId,color) => {
  return {
    type: COLORSELECTED,
    payload: {
        // taskId : taskId,
        // color : color
        taskId,
        color
    }
  };
};
