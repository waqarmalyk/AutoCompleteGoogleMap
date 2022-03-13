import React, { useEffect, useRef, useCallback, useState } from "react";
import { loadScript, handleScriptLoad } from "./loadScripts";
import AddressForm from "./AddressForm";
import getCompleteAddress from "./getCompleteAddress";
import GoogleMap from "./GoogleMap";
import "./LocationFinder.css";

const LocationFinder = () => {
  const [isInputPresent, setIsInputPresent] = useState(false);
  const [addressAndLocation, setAddressAndLocation] = useState();
  const [displayForm, setDisplayForm] = useState(false);
  const autoCompleteRef = useRef(null);

  const handlePlaceSelect = useCallback((autoCompleteField) => {
    const addressObject = autoCompleteField.getPlace();
    const completeAddress = getCompleteAddress(
      addressObject?.address_components
    );
    const query = {
      address: addressObject.formatted_address,
      location: addressObject.geometry.location,
      name: addressObject.name,
      ...completeAddress,
    };
    setAddressAndLocation(query);
  }, []);

  const handleChange = (event) => {
    event.target.value ? setIsInputPresent(true) : setIsInputPresent(false);
  };

  const handleEditClick = () => {
    setIsInputPresent((prev) => !prev);
    setDisplayForm((prev) => !prev);
  };

  useEffect(() => {
    loadScript(() => handleScriptLoad(autoCompleteRef, handlePlaceSelect));
  }, [handlePlaceSelect]);

  return (
    <div className="sub-container">
      <div className="search-container">
        <div>
          <label className="search-title">Search a Location</label>
          <input
            className=""
            name="search-locations"
            type="text"
            onChange={handleChange}
            ref={autoCompleteRef}
          />
          <button className="edit" onClick={handleEditClick}>
            {displayForm ? "Address search" : "Edit"}
          </button>
        </div>
        {displayForm && <AddressForm addressObject={addressAndLocation} />}
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
