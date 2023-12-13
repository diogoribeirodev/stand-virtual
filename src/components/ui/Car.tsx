import React from "react";
interface CarProps {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  year: number;
  combustible: string;
  store_id: number;
}
export function Car({ car }: { car: CarProps }) {
  return (
    <div>
      <h1>Car</h1>
    </div>
  );
}
