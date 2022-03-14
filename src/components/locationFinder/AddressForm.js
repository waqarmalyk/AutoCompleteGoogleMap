import React from "react";

const AddressForm = ({ addressObject }) => (
  <form>
    <label>Street:</label>
    <input
      defaultValue={addressObject?.streetNumber}
      type="text"
      name="street"
    />
    <br />
    <label>Postal Code:</label>
    <input
      defaultValue={addressObject?.postalCode}
      type="number"
      name="postalCode"
    />
    <br />
    <label>City:</label>
    <input defaultValue={addressObject?.city} type="text" name="city" />
    <br />
    <label>Country:</label>
    <input defaultValue={addressObject?.country} type="text" name="country" />
  </form>
);

export default AddressForm;
