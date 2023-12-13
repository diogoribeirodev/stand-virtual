import React from "react";
import { IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";

export const Cars: React.FC = () => {
  return (
    <>
      <div id="main">
        <IonList>
          {" "}
          <IonListHeader>
            <IonLabel>UTILITÁRIOS</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Citroen C3</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Ford Fiesta</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Peugeot 208</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Renault Clio</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Volkswagen Polo</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Seat Ibiza</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Audi A1</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mercedes-Benz Classe A</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Nissan Micra</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>SUV</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Volkswagen Tiguan</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mazda CX-5</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hyundai Kauai</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>KIA Sportage</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Peugeot 3008</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Jaguar E-Pace</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Porsche Macan</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mercedes GLC</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Tesla Model X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mazda MX 30</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>COUPÉ</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Volkswagen Tiguan</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mazda CX-5</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hyundai Kauai</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>KIA Sportage</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Peugeot 3008</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Jaguar E-Pace</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Porsche Macan</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mercedes GLC</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Tesla Model X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mazda MX 30</IonLabel>
          </IonItem>
        </IonList>
      </div>
    </>
  );
};
