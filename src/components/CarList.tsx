import { IonCol, IonGrid, IonItem, IonList, IonRow, IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import { cars } from "../data";
import Car from "./ui/Car";

export const CarList: React.FC = () => {
  const [tipo, setTipo] = React.useState<string>('');
  const [combustivel, setCombustivel] = React.useState<string>('');
  const storeId = useParams();

  const filteredCars = cars.filter(car => {
    if (storeId.id && car.store_id !== parseInt(storeId.id)) {
      return false;
    }
    if (tipo && car.category !== tipo) {
      return false;
    }
    if (combustivel && car.fuel !== combustivel) {
      return false;
    }
    return true;
  });


  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonList>
              <IonItem>
                <IonSelect aria-label="tipo" placeholder="Tipo" onIonChange={(e) => setTipo(e.detail.value)}>
                  <IonSelectOption value="SUV">SUV</IonSelectOption>
                  <IonSelectOption value="Coupe">Coupe</IonSelectOption>
                  <IonSelectOption value="utilitario">Utilitário</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <IonSelect aria-label="combustivel" placeholder="Combustível" onIonChange={(e) => setCombustivel(e.detail.value)}>
                  <IonSelectOption value="gasolina">Gasolina</IonSelectOption>
                  <IonSelectOption value="diesel">Gasóleo</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          {filteredCars.map((car) => (
            <IonCol sizeXl="4" sizeMd="6" sizeSm="6" sizeXs="12" key={car.id}>
              <Car car={car} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
};
