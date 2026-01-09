import { Header } from "../../Single/Header";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { createCustomIcon } from "../../Single/MapUtils";
import { useEffect, useState } from "react";
import { blogPosts } from "../../data/datatype/data_maps"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'leaflet/dist/leaflet.css';
import { StandardHeader } from "../../Single/StandardHeader";
import { BlogPostType } from "../Home/Data";
import { MapEntry } from "../../data/datatype/data_maps";


const ResizeMap = () => {
    const map = useMap();
    useEffect(() => {
        map.invalidateSize();
    }, [map]);
    return null;
};

type TransportType = "Plane" | "Car" | "Train" | "Home";

const transportColors: Record<TransportType, string> = {
    Plane: "red",
    Car: "orange",
    Train: "green",
    Home: "blue",
};

const getColorForTransport = (transport: TransportType): string => {
    return transportColors[transport];
};

export interface ChecklistSection {
    title: string;
    items: string[];
}

export const travelChecklist: ChecklistSection[] = [
    {
        title: "PARTIE ADMIN",
        items: [
            "Passeport valide",
            "Confirmation de Visa imprimée",
            "Photocopies de mes papiers d’identité (en cas de perte ou de vol)",
            "Billet d’avion",
            "Permis international / Traduction NAATI + permis national",
            "Souscrire une assurance santé",
            "Prendre mon carnet de santé / preuve de vaccination",
            "Résiliation de mes abonnements",
            "Faire une procuration à mes parents / famille pour la banque, la poste, les élections",
            "Prévoir quelques dollars pour ne pas avoir à changer en arrivant",
            "Réserver 1 ou plusieurs nuits en auberge de jeunesse",
            "Penser à mettre mes papiers dans une poche accessible du sac à dos",
        ],
    },
    {
        title: "MON SAC - VÊTEMENTS",
        items: [
            "5 T-shirts manches courtes / débardeurs + 1 ou 2 manches longues",
            "Un vêtement de pluie",
            "2 hauts chauds type sweat à capuche",
            "1 jean",
            "1 pantalon usé / large",
            "2 ou 3 shorts",
            "1 pantalon / jupe habillé(e)",
            "1 pyjama",
            "6 paires de chaussettes",
            "6 sous-vêtements habituels",
            "2 maillots de bain",
        ],
    },
    {
        title: "TROUSSE DE TOILETTE & PHARMACIE",
        items: [
            "Brosse à dents + dentifrice",
            "Petit miroir",
            "Un coupe-ongles + pince à épiler",
            "Déodorant",
            "Gel douche / shampoing à Acheter à l’arrivée",
            "Désinfectant",
            "Aspirine",
            "Anti diarrhétique",
            "Mes médicaments si je suis un traitement",
            "Préservatifs / pilule",
            "1 tube de crème solaire",
        ],
    },
    {
        title: "MES CHAUSSURES",
        items: [
            "1 paire de tongs",
            "1 ou 2 paires de baskets usées",
            "1 paire de chaussures de ville (pas toujours essentiel)",
        ],
    },
    {
        title: "ACCESSOIRES",
        items: [
            "Lunettes de soleil",
            "1 ceinture",
            "1 casquette",
            "1 ou 2 cadenas",
            "Appareil photo",
            "Ordinateur portable (au choix)",
            "Mon téléphone + chargeur",
            "Un adaptateur (facilement trouvable sur place)",
            "Petit sac à dos pour les excursions",
        ],
    },
];

const AustraliaContent = () => {
    // Function to render content based on selected sport
    const renderAustraliaContent = () => {
        // Filter trips belonging to the "Australia-Asia-2025-2026" collection
        const filteredTrips = blogPosts.filter(
            (trip) =>
                trip.collection?.includes("GapYear2026") ?? false
        );

        return (
            <>
                <div className="flex items-center justify-center">
                    {/* @ts-ignore */}

                    <MapContainer center={[-6.2088, 106.8456]}
                        worldCopyJump={true}
                        zoom={2}
                        scrollWheelZoom={false}
                        style={{ width: `800px`, height: `500px`, zIndex: 1 }}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        {filteredTrips.map((value) => (
                            <>
                                {/* @ts-ignore */}
                                <Marker key={value.id} position={value.GPS} icon={createCustomIcon(getColorForTransport(value.transport))}
                                >
                                    <Popup>
                                        <div className="font-bold text-lg">
                                            {value.title + " - " + value.date}
                                        </div>
                                        <br />
                                        {value.C02 + " kg CO2eq"}
                                    </Popup>
                                </Marker>
                            </>
                        ))}

                        <ResizeMap />
                    </MapContainer>
                </div>
                <h1 className="mt-8 font-bold text-3xl underline">Items List</h1>
                <div className="mt-4">
                    {travelChecklist.map((section) => (
                        <div key={section.title} className="mb-4">
                            <h3 className="font-bold text-lg">{section.title}</h3>
                            <ul className="list-disc list-inside">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </>
        );
    };


    return (
        <>
            {renderAustraliaContent()}
        </>
    );
};

export const Australia = ({ title, date }: { title: string, date: string }) => {
    return (
        <>
            <StandardHeader title={title} date={""}
                content={<AustraliaContent />} />
        </>
    );
};