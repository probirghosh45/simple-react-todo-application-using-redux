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

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId,color) => {
  return {
    type: COLORSELECTED,
    payload: {
        // todoId : taskId,
        // color : color
        todoId,
        color
    }
  };
};
