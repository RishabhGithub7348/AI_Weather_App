
const cleanData = (data: Root, city: string) => {
    const {
        current_weather,
        timezone,
        hourly,
        hourly_units,
        timezone_abbreviation
    } = data;

    const {temperature, windspeed , winddirection, weathercode, time} = current_weather;

    const {temperature_2m, precipitation_probability, uv_index, rain, snowfall, relativehumidity_2m} = hourly;

    const temperature_2m_sliced = temperature_2m.length >= 24 ? temperature_2m.slice(0, 24) : temperature_2m;
    const precipitation_probability_sliced = precipitation_probability.length >= 24 ? precipitation_probability.slice(0, 24) : precipitation_probability;
    const uv_index_sliced = uv_index.length >= 24 ? uv_index.slice(0, 24) : uv_index;
    const rain_sliced = rain.length >= 24 ? rain.slice(0, 24) : rain;
    const snowfall_sliced = snowfall.length >= 24 ? snowfall.slice(0, 24) : snowfall;
    const relativehumidity_2m_sliced = relativehumidity_2m.length >= 24 ? relativehumidity_2m.slice(0, 24) : relativehumidity_2m;
  
    // Return cleaned data object
    return {
      current_weather: {
        temperature,
        windspeed,
        winddirection,
        weathercode,
        time
      },
      hourly: {
        temperature_2m: temperature_2m_sliced,
        precipitation_probability: precipitation_probability_sliced,
        uv_index: uv_index_sliced,
        rain: rain_sliced,
        snowfall: snowfall_sliced,
        relativehumidity_2m: relativehumidity_2m_sliced
      },
      timezone,
      timezone_abbreviation,
      city,
      hourly_units
    };
  };
  
  export default cleanData;