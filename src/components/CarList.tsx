import React from "react";
import { cars } from "../data";
import { Car } from "./ui/Car";

export const CarList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <Car car={car} />
      ))}
    </div>
  );
};
