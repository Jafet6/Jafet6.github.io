export const REMOVE_TODO = 'REMOVE_TODO';

export const removeInputAction = (newArray) => ({
  type: REMOVE_TODO,
  list: newArray,
});
