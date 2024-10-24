import { Autocomplete, GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const libraries = ["places"];

const MapWithAutocomplete = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "=AIzaSyCx3n09Zpghadz7-CH2BP3wW-yq9UcH5M8",  // Replace with your Google Maps API key
    libraries,
  });

  const [coordinates, setCoordinates] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco
  const [autocomplete, setAutocomplete] = useState(null); // State for autocomplete

  const handlePlaceChanged = () => {
    if (autocomplete !== null) { // Check if autocomplete is initialized
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = place.geometry.location;
        setCoordinates({
          lat: location.lat(),
          lng: location.lng(),
        });
      }
    } else {
      console.log("Autocomplete is not loaded yet.");
    }
  };

  const onLoadAutocomplete = (autoC) => setAutocomplete(autoC);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <Autocomplete
        onLoad={onLoadAutocomplete}  // Initializes the autocomplete object
        onPlaceChanged={handlePlaceChanged}  // Triggered when a place is selected
      >
        <input
          type="text"
          placeholder="Enter an address"
          style={{
            width: "300px",
            height: "40px",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
      </Autocomplete>

      <GoogleMap
        center={coordinates}
        zoom={12}
        mapContainerStyle={{ width: "100%", height: "400px" }}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </div>
  );
};

export default MapWithAutocomplete;
