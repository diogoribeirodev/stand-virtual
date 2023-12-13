import { Geolocation } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import { stores } from '../data';

export const Home: React.FC = () => {

    const [currentPosition, setCurrentPosition] = useState({ latitude: 0, longitude: 0 });

    const printCurrentPosition = async () => {
        const { latitude, longitude } = (await Geolocation.getCurrentPosition()).coords;
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
                unit: "K"
            });
        }
    }, []);

    return (
        <span>
            <h1>Home</h1>
            <p>Latitude: {currentPosition.latitude}</p>
            <p>Longitude: {currentPosition.longitude}</p>
        </span>
    );
}

function distance({ lat1, lon1, lat2, lon2, unit }: { lat1: number, lon1: number, lat2: number, lon2: number, unit: string }) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}