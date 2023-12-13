import React from "react";
interface CarProps {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  price_day: string;
  year: string;
  combustible: string;
  store_id: string;
}
export function Car({ car }: { car: CarProps }) {
  return (
    <div>
      <h1>Car</h1>
    </div>
  );
}
