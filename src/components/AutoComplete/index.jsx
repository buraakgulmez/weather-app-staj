import { useState } from "react";
import { Cities } from "../../assets/data/cities";
export default function AutoComplete({ onChange, loading }) {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (val) => {
    const search = val.target.value;
    setText(search);

    const matchingCities = Cities.filter(
      (city) => search && city.toLowerCase().includes(search.toLowerCase())
    );

    setData(matchingCities.slice(0, 4));

    if (typeof onChange === "function") {
      onChange("");
    }
  };

  const handleSelect = (city) => {
    setText(city);
    setData([]);

    if (typeof onChange === "function") {
      onChange(city);
    }
  };

  return (
    <>
      <div className="absolute top-0 w-full flex justify-center">
        <img src={require("../../assets/images/Logo.png")} alt="" />
      </div>
      <div className="text-center mb-8">
        <p className="text-xl	font-bold text-gray-100">
          Welcome to <span className="text-blue-light">TypeWeather</span>
        </p>
        <p className="text-sm text-gray-200">
          Choose a location to see the weather forecast
        </p>
      </div>
      <div className="mb-2">
        <input
          className="px-[20px] rounded-[8px] bg-[#1E1E29] placeholder-gray-400 w-[452px] h-[56px] focus:outline-none"
          type="text"
          placeholder="Search location"
          onChange={handleChange}
          value={text}
        />
        {loading && <span>Loading</span>}
      </div>
      <div className="flex flex-col gap-[1px] w-[452px]">
        {data.map((city, index) => (
          <div
            key={index}
            className={`bg-gray-500 px-[20px] py-[16px] cursor-pointer hover:bg-[#1E1E29] ${
              data.length === 1
                ? "rounded-[8px]"
                : index === 0
                ? "rounded-t-[8px]"
                : index === data.length - 1 && "rounded-b-[8px]"
            }`}
            onClick={() => handleSelect(city)}
          >
            {city}
          </div>
        ))}
      </div>
    </>
  );
}
