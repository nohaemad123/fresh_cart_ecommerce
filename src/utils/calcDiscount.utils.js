export function calcDiscount({ price, priceAfterDiscount }) {
  if (
    typeof price !== "number" ||
    typeof priceAfterDiscount !== "number" ||
    price <= 0 ||
    priceAfterDiscount <= 0 ||
    priceAfterDiscount >= price
  ) {
    return null;
  }

  const discount = ((price - priceAfterDiscount) / price) * 100;
  return Math.round(discount);
}
