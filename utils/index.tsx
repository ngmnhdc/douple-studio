export const formatPrice = (price: string): string => {
  return `${price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`
}