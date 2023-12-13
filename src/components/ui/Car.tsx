import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  useIonModal,
} from "@ionic/react";
interface CarProps {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  price_day: string;
  year: string;
  combustible: string;
  store_id: string;
}

function Cars({ car }: { car: CarProps }) {
  const [present] = useIonModal(Modal);

  return (
    <>
      <IonCard color="light">
        <img
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/card-media.png"
        />
        <IonCardHeader>
          <IonCardTitle>{car.name}</IonCardTitle>
          <IonCardSubtitle>{car.category}</IonCardSubtitle>
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
export default Cars;

export function Car({ car }: { car: CarProps }) {
  return (
    <div>
      <h1>Car</h1>
    </div>
  );
}

const Modal: React.FC = () => {
  return <IonContent>p</IonContent>;
};
