import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ selectedProfile }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = selectedProfile
    ? {
        lat: selectedProfile.location.lat,
        lng: selectedProfile.location.lng,
      }
    : {
        lat: 0,
        lng: 0,
      };

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={selectedProfile ? 12 : 2}
        >
          {selectedProfile && (
            <Marker
              position={{
                lat: selectedProfile.location.lat,
                lng: selectedProfile.location.lng,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map; 