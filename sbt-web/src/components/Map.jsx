import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 9.9252, // Madurai approx
  lng: 78.1198
};

const MapMockup = ({ busLocation, path }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // Placeholder
  });

  if (!isLoaded) return <div className="w-full h-full bg-slate-100 animate-pulse flex items-center justify-center">Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={busLocation || center}
      zoom={14}
      options={{
        styles: [
          {
            "featureType": "poi",
            "stylers": [{ "visibility": "off" }]
          }
        ],
        disableDefaultUI: true,
      }}
    >
      {busLocation && (
        <Marker 
          position={busLocation} 
          icon={{
            url: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png", // Bus Icon
            scaledSize: { width: 40, height: 40 }
          }}
        />
      )}
      {path && (
        <Polyline
          path={path}
          options={{
            strokeColor: "#1E40AF",
            strokeOpacity: 0.8,
            strokeWeight: 4,
          }}
        />
      )}
    </GoogleMap>
  );
};

export default React.memo(MapMockup);
