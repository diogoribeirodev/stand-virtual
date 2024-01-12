export {};

declare global {
  type Car = {
    id: number;
    name: string;
    category: string;
    image: string;
    price: string;
    price_day: string;
    year: string;
    fuel: string;
    store_id: number;
    new: boolean;
  };
  type Store = {
    id: number;
    name: string;
    image: string;
    location: string;
    address: string;
    latitude: number;
    longitude: number;
  };
}
