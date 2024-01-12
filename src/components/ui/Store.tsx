import { GoogleMap } from "@capacitor/google-maps";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonTitle,
  useIonModal,
} from "@ionic/react";
import { useRef } from "react";

function Store({ store }: { store: Store }) {
  const [present] = useIonModal(Modal({ store }));

  return (
    <>
      <IonCard color="light">
        <img alt={store.name} src={store.image} />
        <IonCardHeader>
          <IonCardTitle>{store.name}</IonCardTitle>
          <IonCardSubtitle>{store.location}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton fill="clear" onClick={() => present()} expand="block">
            View More
          </IonButton>
        </IonCardContent>
      </IonCard>
    </>
  );
}
export default Store;

function Modal({ store }: { store: Store }) {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;
    newMap = await GoogleMap.create({
      id: "my-cool-map",
      element: mapRef.current,
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
      config: {
        center: {
          lat: store.latitude,
          lng: store.longitude,
        },
        zoom: 16,
      },
    });

    newMap.addMarker({
      coordinate: {
        lat: store.latitude,
        lng: store.longitude,
      },
      title: store.name,
      snippet: store.address,
    });
  }
  return (
    <>
      <IonContent class="ion-col">
        <img alt={store.name} src={store.image} />
        <br />
        <br />
        <IonTitle class="ion-col">
          {store.address + " " + store.location}
        </IonTitle>
        <br />
        <IonButton onClick={createMap}>View in Maps</IonButton>
        <capacitor-google-map ref={mapRef} className="capacitor-google-map" />
        <IonButton
          onClick={() => window.location.replace(`Cars?store=${store.id}`)}
        >
          Go to Cars
        </IonButton>
      </IonContent>
    </>
  );
}
