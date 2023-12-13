import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";

interface CarProps {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  price_day: string;
  year: string;
  fuel: string;
  store_id: number;
}

function Car({ car }: { car: CarProps }) {
  return (
    <>
      <IonCard color="light" >
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>{car.name}</IonCardTitle>
          <IonCardSubtitle></IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </IonCard>

    </>
  );
}
export default Car;