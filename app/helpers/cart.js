export const getTotalQuantity = (array) => {
  if (!array.length) return 0;
  return array.reduce((acc, currentItem) => acc + currentItem.quantity, 0);
};

export const getTotalPrice = (array) => {
  if (!array.length) return 0;
  return array.reduce(
    (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
    0
  );
};
