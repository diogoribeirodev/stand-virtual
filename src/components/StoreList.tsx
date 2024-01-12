import { IonCol, IonGrid, IonRow } from "@ionic/react";
import "./StoreList.css";
import Store from "./ui/Store";
import { useEffect } from "react";
import React from "react";

export const StoreList: React.FC = () => {
  const [stores, setStores] = React.useState<Store[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(
          "https://stand-virtual-api.vercel.app/api/stores",
        );
        const data = await response.json();
        setStores(data.stores);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStores();
  }, []);

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
