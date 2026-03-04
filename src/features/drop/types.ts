export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface Reservation {
  id: string;
  productId: string;
  expiresAt: string;
}