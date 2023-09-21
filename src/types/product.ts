export type Product = {
    id: string,
    name: string,
    imageUrl: string,
    description: string | null,
    price?: number | null
}