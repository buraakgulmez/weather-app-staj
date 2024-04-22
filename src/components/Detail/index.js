import React from "react";
import moment from "moment";
import { Icon } from "../../Icons";

export default function Detail({ data }) {
  const getWeatherImg = (weather, time) => {
    const hourOfDay = new Date(time * 1000).getHours();
    const isEvening = hourOfDay >= 18 || hourOfDay < 6;

    switch (weather) {
      case "Clouds":
        if (isEvening) {
          return (
            <img
              src={require("../../../src/assets/images/cloudy-night.png")}
              alt="Clouds"
            />
          );
        } else {
          return (
            <img
              src={require("../../../src/assets/images/cloudy-day.png")}
              alt="Clouds"
            />
          );
        }
      case "Rain":
        if (isEvening) {
          return (
            <img
              src={require("../../../src/assets/images/rain-night.png")}
              alt="Rain"
            />
          );
        } else {
          return (
            <img
              src={require("../../../src/assets/images/rain-day.png")}
              alt="Rain"
            />
          );
        }

      case "Clear":
        if (isEvening) {
          return (
            <img
              src={require("../../../src/assets/images/clear-night.png")}
              alt="Rain"
            />
          );
        } else {
          return (
            <img
              src={require("../../../src/assets/images/clear-day.png")}
              alt="Rain"
            />
          );
        }

      default:
        if (isEvening) {
          return (
            <img
              src={require("../../../src/assets/images/clear-night.png")}
              alt="Rain"
            />
          );
        } else {
          return (
            <img
              src={require("../../../src/assets/images/clear-day.png")}
              alt="Rain"
            />
          );
        }
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
      <div className="w-[355px] h-[324px] bg-detail bg-center bg-cover bg-no-repeat rounded-lg relative">
        <div className="px-5 py-5">
          <p className="text-gray-100 font-bold">
            {data.name}, {data.sys.country}
          </p>
          <p className="text-xs text-gray-100">
            {moment.unix(data.dt).format("dddd, MMMM DD, YYYY")}
          </p>
        </div>
        <div className="px-5 py-5 absolute bottom-0 flex justify-center items-center flex-col gap-2">
          <p className="text-5xl font-extrabold">
            {Math.round(data.main.temp)}°c
          </p>
          <p className="font-bold">
            {Math.round(data.main.temp_min)}°c /{Math.round(data.main.temp_max)}
            °c
          </p>
          <p>{data.weather[0].main}</p>
        </div>
        <div className="absolute right-0 p-5 bottom-5 w-[160px] h-[160px]">
          {getWeatherImg(data.weather[0].main, data.dt)}
        </div>
      </div>
      <div className="w-full bg-gray-800 rounded-xl py-1 px-4">
        <div className="flex justify-between items-center py-4 ">
          <div className="flex gap-4 items-center">
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <Icon name="thermometer" className="fill-gray-500" />
            </div>
            <p className="text-gray-200 text-sm">Thermal sensation:</p>
          </div>
          <div>
            <p className="text-gray-100">{data.main.temp} °C</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 ">
          <div className="flex gap-4 items-center">
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <Icon name="windIcon" className="fill-gray-500" />
            </div>
            <p className="text-gray-200 text-sm">Wind speed:</p>
          </div>
          <div>
            <p className="text-gray-100">{data.wind.speed} km/h</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 ">
          <div className="flex gap-4 items-center">
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <Icon name="airHumidity" className="fill-gray-500" />
            </div>
            <p className="text-gray-200 text-sm">Air humidity:</p>
          </div>
          <div>
            <p className="text-gray-100">{data.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
