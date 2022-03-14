const getCompleteAddress = (addressObject) => {
  let completeAddress = {};

  addressObject.forEach((element) => {
    const types = element.types[0];

    switch (types) {
      case "street_number": {
        completeAddress["streetNumber"] = element.long_name;
        break;
      }
      case "postal_code": {
        completeAddress["postalCode"] = element.long_name;
        break;
      }
      case "locality":
        completeAddress["city"] = element.long_name;
        break;
      case "country":
        completeAddress["country"] = element.long_name;
        break;
      default:
    }
  });
  return completeAddress;
};

export default getCompleteAddress;
