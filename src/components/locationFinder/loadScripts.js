export const loadScript = (callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.onload = callback;
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDR3E0Ko3uYrfQaqX9964woDyJ8NoDn4tg&libraries=places`;
  document.getElementsByTagName("head")[0].appendChild(script);
};

export const handleScriptLoad = (autoCompleteRef, handlePlaceSelect) => {
  const autoCompleteField = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["establishment"] }
  );
  autoCompleteField.setFields([
    "address_components",
    "geometry.location",
    "icon",
    "name",
    "formatted_address",
  ]);
  autoCompleteField.addListener("place_changed", () =>
    handlePlaceSelect(autoCompleteField)
  );
};
