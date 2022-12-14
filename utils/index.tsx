export const formatPrice = (price: string | number): string => {
  return `${price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`
}