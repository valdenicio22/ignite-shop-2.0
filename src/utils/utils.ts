export const formatPrice = (value :number): string=> {
  const formattedValue = Intl.NumberFormat("pt-Br", {
    currency:  "BRL",
    style: "currency",
  }).format(value)

  return formattedValue
}