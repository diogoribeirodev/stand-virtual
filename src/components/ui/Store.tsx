import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { useRef } from "react";

interface StoreProps {
    id: number;
    name: string;
    image: string;
    location: string;
    address: string;
    latitude: number;
    longitude: number;
}

export const Store = (props: StoreProps) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    return (
        <IonCard className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={props.image} alt={props.name} />
            <IonCardHeader className="p-4 text-center items-center">
                <IonCardTitle className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.name}
                </IonCardTitle>
                <IonCardSubtitle className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props.location}
                </IonCardSubtitle>
                <IonButton id="open-modal" expand="block">
                    View more
                </IonButton>
                <IonModal ref={modal} trigger="open-modal">
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                            </IonButtons>
                            <IonTitle>Welcome</IonTitle>
                            <IonButtons slot="end">
                                <IonButton strong={true} onClick={() => confirm()}>
                                    Confirm
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonItem>
                            <IonInput
                                label="Enter your name"
                                labelPlacement="stacked"
                                ref={input}
                                type="text"
                                placeholder="Your name"
                            />
                        </IonItem>
                    </IonContent>
                </IonModal>
            </IonCardHeader>
        </IonCard>
    );
};
