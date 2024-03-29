import { Geolocation } from "@capacitor/geolocation";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonFooter,
  IonGrid,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import Car from "../components/ui/Car";
import Store from "../components/ui/Store";
import { GoogleMap } from "@capacitor/google-maps";

export const Home: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) {
    if (!mapRef.current) return;
    console.log(currentPosition);
    newMap = await GoogleMap.create({
      id: "my-cool-map",
      element: mapRef.current,
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
      config: {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: 16,
      },
    });

    newMap.addMarker({
      coordinate: {
        lat: latitude,
        lng: longitude,
      },
    });
  }

  const printCurrentPosition = async () => {
    const { latitude, longitude } = (
      await Geolocation.getCurrentPosition({
        timeout: 5000,
        maximumAge: 5000,
      })
    ).coords;
    setCurrentPosition({ latitude, longitude });
    return { latitude, longitude };
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://stand-virtual-api.vercel.app/api/cars?new=true",
        );
        const data = await response.json();
        setCars(data.cars);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
    printCurrentPosition().then((data) => {
      createMap(data);
    });
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
          <capacitor-google-map ref={mapRef} className="capacitor-google-map" />
        </IonCardContent>
      </IonCard>
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
      <IonText>
        <h3>Novidades</h3>
      </IonText>
      <IonGrid>
        <IonRow>
          {cars.map((car) => (
            <IonCol key={car.id}>
              <Car car={car} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

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
          <IonInput
            label="Name:"
            placeholder="Enter your name"
            inputMode="text"
            value={name}
            onIonInput={(e) => setName(e.detail.value as string)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Email:"
            placeholder="Enter your emaill"
            inputMode="email"
            value={email}
            onIonInput={(e) => setEmail(e.detail.value as string)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonTextarea
            label="Message:"
            placeholder="Type your message here"
            value={message}
            inputMode="text"
            onIonInput={(e) => setMessage(e.detail.value as string)}
          ></IonTextarea>
        </IonItem>
        <IonItem>
          <IonButton
            color="primary"
            onClick={() => {
              alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
              setName("");
              setEmail("");
              setMessage("");
            }}
          >
            Send
          </IonButton>
        </IonItem>
      </IonFooter>
    </span>
  );
};
