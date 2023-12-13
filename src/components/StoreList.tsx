import React from "react";
import { stores } from "../data";
import { Store } from "./ui/Store";

export const StoreList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
                <Store
                    id={store.id}
                    image={store.image}
                    latitude={store.latitude}
                    longitude={store.longitude}
                    location={store.location}
                    address={store.address}
                    key={store.id}
                    name={store.name}
                />
            ))
            }
        </div>
    );
};