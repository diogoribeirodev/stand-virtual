import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, useIonModal } from '@ionic/react';

interface StoreProps {
    id: number;
    name: string;
    image: string;
    location: string;
    address: string;
    latitude: number;
    longitude: number;
}

function Store({ store }: { store: StoreProps }) {

    const [present] = useIonModal(Modal);

    return (
        <>
            <IonCard color="light" >
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                    <IonCardTitle>{store.name}</IonCardTitle>
                    <IonCardSubtitle>{store.location}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonButton fill="clear" onClick={() => present()} expand="block">View More</IonButton>
                </IonCardContent>
            </IonCard>

        </>
    );
}
export default Store;

const Modal: React.FC = () => {
    return (
        <IonContent>
            p
        </IonContent>
    );
};