import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";
import { stores, new_cars } from "../data";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonText,
  IonItem,
  IonLabel,
  IonNote,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonInput,
  IonList,
  IonTextarea,
} from "@ionic/react";

export const Home: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const printCurrentPosition = async () => {
    const { latitude, longitude } = (await Geolocation.getCurrentPosition())
      .coords;
    setCurrentPosition({ latitude, longitude });
  };

  useEffect(() => {
    printCurrentPosition();
    for (let i = 0; i < stores.length; i++) {
      stores[i].id = distance({
        lat1: currentPosition.latitude,
        lon1: currentPosition.longitude,
        lat2: stores[i].latitude,
        lon2: stores[i].longitude,
        unit: "K",
      });
    }
  }, []);

  return (
    <span>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Localização</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Latitude: {currentPosition.latitude}/ Longitude:{" "}
          {currentPosition.longitude}
        </IonCardContent>
      </IonCard>

      <IonImg
        src="https://docs-demo.ionic.io/assets/madison.jpg"
        alt="The Wisconsin State Capitol building in Madison, WI at night"
      ></IonImg>

      <IonText>
        <h3> Happy Car Rent</h3>
      </IonText>
      <IonText>
        <h5>
          {" "}
          A "Happy Car Rent" é uma empresa de aluguer de veículos que se destaca
          pela sua presença global, oferecendo uma ampla variedade de opções de
          aluguer em várias localidades ao redor do mundo. Com o compromisso de
          proporcionar uma experiência de condução inigualável aos nossos
          clientes, a "Happy Car Rent" tem expandido constantemente a sua rede
          de lojas para garantir que você possa encontrar os veículos perfeitos
          onde quer que a sua jornada o leve. Nossas lojas estão
          estrategicamente localizadas em destinos populares, aeroportos
          movimentados e centros urbanos, tornando fácil e conveniente o acesso
          aos nossos serviços de aluguer de carros de alta qualidade. Na "Happy
          Car Rent", acreditamos que a mobilidade é a chave para explorar novos
          horizontes, e é por isso que nos esforçamos para fornecer uma frota
          diversificada que atenda a todas as suas necessidades de viagem.
        </h5>
      </IonText>
      <br />
      <br />

      <IonItem>
        <IonLabel>Prémios Ganhos pela Empresa</IonLabel>
        <IonNote slot="end">⭐️</IonNote>
      </IonItem>

      <IonItem>
        <IonNote slot="start">Prêmios de Satisfação do Cliente:</IonNote>
        <IonLabel>
          Reconhecimentos por proporcionar uma experiência excepcional aos
          clientes, medidos através de avaliações e feedbacks.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonNote slot="start">Certificações de Qualidade:</IonNote>
        <IonLabel>
          Certificações de qualidade, como a ISO 9001, que atestam os padrões de
          qualidade nos serviços prestados pela empresa.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonNote slot="start" color="primary">
          Prêmios do Setor:
        </IonNote>
        <IonLabel>
          Reconhecimentos específicos dentro da indústria de aluguer de
          automóveis, como "Melhor Empresa de Aluguer de Carros", "Melhor
          Frota".
        </IonLabel>
      </IonItem>
      <br />
      <br />

      <IonFooter>
        <IonToolbar>
          <IonTitle>Contacto</IonTitle>
        </IonToolbar>
        <IonItem>
          <IonInput label="Name:" placeholder="Enter your name"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Email:" placeholder="Enter your emaill"></IonInput>
        </IonItem>
        <IonItem>
          <IonTextarea
            label="Message:"
            placeholder="Type your message here"
          ></IonTextarea>
        </IonItem>
      </IonFooter>
    </span>
  );
};

function distance({
  lat1,
  lon1,
  lat2,
  lon2,
  unit,
}: {
  lat1: number;
  lon1: number;
  lat2: number;
  lon2: number;
  unit: string;
}) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
}
