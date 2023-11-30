import { Geolocation } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';

export const Home: React.FC = () => {

    const [currentPosition, setCurrentPosition] = useState({ latitude: 0, longitude: 0 });

    const printCurrentPosition = async () => {
        const { latitude, longitude } = (await Geolocation.getCurrentPosition()).coords;
        setCurrentPosition({ latitude, longitude });
    };

    useEffect(() => {
        printCurrentPosition();
    }, []);

    return (
        <span>
            <h1>Home</h1>
            <p>Latitude: {currentPosition.latitude}</p>
            <p>Longitude: {currentPosition.longitude}</p>
        </span>
    );
}