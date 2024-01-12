import {
  IonCol,
  IonGrid,
  IonItem,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useEffect } from "react";
import Car from "./ui/Car";

export const CarList: React.FC = () => {
  const [tipo, setTipo] = React.useState<string>("");
  const [combustivel, setCombustivel] = React.useState<string>("");
  const [cars, setCars] = React.useState<Car[]>([]);
  const storeId = new URLSearchParams(window.location.search).get("store");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          `https://stand-virtual-api.vercel.app/api/cars?${
            tipo ? `category=${tipo}` : ""
          }${combustivel ? `&fuel=${combustivel}` : ""}${
            storeId ? `&store=${storeId}` : ""
          }`,
        );
        const data = await response.json();
        setCars(data.cars);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, [tipo, combustivel]);

  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonList>
              <IonItem>
                <IonSelect
                  aria-label="tipo"
                  placeholder="Tipo"
                  onIonChange={(e) => setTipo(e.detail.value)}
                  cancelText={"Limpar"}
                  onIonCancel={(e) => {
                    e.preventDefault();
                    setTipo("");
                  }}
                >
                  <IonSelectOption value="SUV">SUV</IonSelectOption>
                  <IonSelectOption value="Coupe">Coupe</IonSelectOption>
                  <IonSelectOption value="utilitario">
                    Utilitário
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <IonSelect
                  aria-label="combustivel"
                  placeholder="Combustível"
                  onIonChange={(e) => setCombustivel(e.detail.value)}
                  cancelText={"Limpar"}
                  onIonCancel={(e) => {
                    setCombustivel("");
                  }}
                >
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
