import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { stores } from "../data";
import "./StoreList.css";
import Store from "./ui/Store";

export const StoreList: React.FC = () => {
  return (
    <>
      <IonGrid>
        <IonRow>
          {stores.map((store) => (
            <IonCol sizeXl="4" sizeMd="6" sizeSm="6" sizeXs="12" key={store.id}>
              <Store store={store} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
};
