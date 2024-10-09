import L from "leaflet";


// SVG for red pin
const PinSVG = (color: string) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
  <path fill="${color}" d="M12 2C8.14 2 5 5.14 5 9c0 4.53 4.58 10.74 6.39 12.96.34.41.9.41 1.24 0C14.42 19.74 19 13.53 19 9c0-3.86-3.14-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
</svg>
`;

export const createCustomIcon = (color: string) => {
    const pinSVG = PinSVG(color);
    const pinIconUrl = `data:image/svg+xml;base64,${btoa(pinSVG)}`;

    return new L.Icon({
        iconUrl: pinIconUrl,
        iconSize: [24, 24], // Size of the icon
        iconAnchor: [12, 24], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -24], // Point from which the popup should open relative to the iconAnchor
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        shadowSize: [20, 20], // Size of the shadow
    });
};