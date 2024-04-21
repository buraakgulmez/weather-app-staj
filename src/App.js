import { useEffect, useState } from "react";
import axios from "axios";
import AutoComplete from "./components/AutoComplete";
import Detail from "./components/Detail";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  async function getFiveDayForecast(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=tr`;
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (selectedCity) => {
    setCity(selectedCity);
  };

  useEffect(() => {
    if (city) {
      getFiveDayForecast(city);
    } else {
      setData(null);
    }
  }, [city]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="wrapper relative">
      {data ? (
        <Detail data={data} />
      ) : (
        <AutoComplete onChange={handleChange} loading={loading} />
      )}
    </div>
  );
}
