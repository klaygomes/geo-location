const undefinedIfBlank = (str) => str === '' ? /* istanbul ignore next */ undefined : str

export default (data) => ({
  ip: undefinedIfBlank(data.ip),
  countryCode: undefinedIfBlank(data.country_code),
  contryName: undefinedIfBlank(data.country_name),
  regionCode: undefinedIfBlank(data.region_code),
  regionName: undefinedIfBlank(data.region_name),
  city: undefinedIfBlank(data.city),
  zipCode: undefinedIfBlank(data.zip_code),
  timeZone: undefinedIfBlank(data.time_zone),
  lat: undefinedIfBlank(data.latitude),
  lng: undefinedIfBlank(data.longitude),
  metroCode: undefinedIfBlank(data.metro_code)
})
