import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from "@ionic/react";

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
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.name}</IonCardTitle>
                <IonCardSubtitle>{props.location}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <img
                    alt={props.name}
                    className="w-full h-[200px] object-cover mb-4"
                    height="200"
                    src={props.image}
                    style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                    }}
                    width="200"
                />
                <p>{props.address}</p>
                <div className="mt-4">
                    <IonButton fill="clear">View Cars</IonButton>
                </div>
            </IonCardContent>
        </IonCard>
    );
};
