export const ITEM_SELECTED = 'ITEM_SELECTED';

export const selectItemAction = (item) => ({
  type: ITEM_SELECTED,
  item,
});
