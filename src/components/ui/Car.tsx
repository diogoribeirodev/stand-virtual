import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonList, useIonModal } from "@ionic/react";
import { useParams } from "react-router";

export interface CarProps {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  price_day: string;
  year: string;
  fuel: string;
  store_id: number;
  new?: boolean;
}

function Car({ car }: { car: CarProps }) {
  const [present] = useIonModal(Modal({ car }));

  return (
    <>
      <IonCard color="light" >
        <img alt={car.name} src={car.image} width={"100%"} height={"100%"} />
        <IonCardHeader>
          <IonCardTitle>{car.name}</IonCardTitle>
          <IonCardSubtitle></IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton fill="clear" onClick={() => present()} expand="block">View More</IonButton>
        </IonCardContent>
      </IonCard>

    </>
  );
}
export default Car;

function Modal({ car }: { car: CarProps }) {
  const store = useParams<{ id: string, name: string }>();
  return (<>
    <IonContent>
      <img alt={car.name} src={car.image} />
      <IonList>
        <IonItem>
          <IonLabel>Nome: {car.name}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Categoria: {car.category.charAt(0).toLocaleUpperCase() + car.category.slice(1)}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Preço: {car.price}€</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Ano: {car.year}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Combustível: {car.fuel.charAt(0).toLocaleUpperCase() + car.fuel.slice(1)}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Preço Diário: {car.price_day}€</IonLabel>
        </IonItem>
        {!store.id && <IonItem>
          <IonLabel>Disponível na loja: {car.store_id}</IonLabel>
        </IonItem>}
      </IonList>
    </IonContent>
  </>)
};