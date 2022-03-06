import React from "react";
import GoogleMapReact from "google-map-react";

const ZOOM = 15;

const GoogleMap = ({ lat, lng, name }) => {
  const center = {
    lat: lat(),
    lng: lng(),
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: center.lat, lng: center.lng },
      map,
      title: name,
    });
    return marker;
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDR3E0Ko3uYrfQaqX9964woDyJ8NoDn4tg" }}
        defaultCenter={center}
        defaultZoom={ZOOM}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
