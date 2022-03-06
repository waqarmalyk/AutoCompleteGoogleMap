import React, { useEffect, useRef, useCallback, useState } from "react";
import GoogleMap from "./GoogleMap";
import { loadScript, handleScriptLoad } from "./loadScripts";
import "./LocationFinder.css";

const LocationFinder = () => {
  const [isInputPresent, setIsInputPresent] = useState(false);
  const [addressAndLocation, setAddressAndLocation] = useState();
  const autoCompleteRef = useRef(null);

  const handlePlaceSelect = useCallback((autoCompleteField) => {
    const addressObject = autoCompleteField.getPlace();
    const query = {
      address: addressObject.formatted_address,
      location: addressObject.geometry.location,
      name: addressObject.name,
    };
    setAddressAndLocation(query);
  }, []);

  const handleChange = (event) => {
    event.target.value ? setIsInputPresent(true) : setIsInputPresent(false);
  };

  useEffect(() => {
    loadScript(() => handleScriptLoad(autoCompleteRef, handlePlaceSelect));
  }, [handlePlaceSelect]);

  return (
    <div className="container">
      <div className="search-container">
        <label className="search-title">Search a Location</label>
        <input
          className=""
          name="search-locations"
          type="text"
          onChange={handleChange}
          ref={autoCompleteRef}
        />

        {addressAndLocation?.address && isInputPresent && (
          <>
            <div className="address">
              <label>Address:</label>
              <label>{addressAndLocation?.address}</label>
            </div>
          </>
        )}
      </div>
      {addressAndLocation?.address && isInputPresent && (
        <div className="google-map">
          <GoogleMap
            lat={addressAndLocation.location.lat}
            lng={addressAndLocation.location.lng}
            name={addressAndLocation.name}
          />
        </div>
      )}
    </div>
  );
};

export default LocationFinder;
