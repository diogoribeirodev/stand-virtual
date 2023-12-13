import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { cars } from "../data";
import { Car } from "./ui/Car";

export const CarList: React.FC = () => {
  return (
    <>
      <IonGrid>
        <IonRow>
          {cars.map((car) => (
            <IonCol sizeXl="4" sizeMd="6" sizeSm="6" sizeXs="12" key={car.id}>
              <Car car={car} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
};
