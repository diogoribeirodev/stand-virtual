import React from "react";
import { IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";

export const Cars: React.FC = () => {
  return (
    <>
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
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
      </IonList>
      ;
    </>
  );
};
