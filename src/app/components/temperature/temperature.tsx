"use client";

import { useEffect, useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { TemperatureProps } from "@/app/components/constants/types";
import "./temperature.scss";


export default function Temperature({ locationData }: TemperatureProps) {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [localTime, setLocalTime] = useState<string | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<string>("day");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      if (!locationData.location) {
        setError("Localização não disponível");
        setLoading(false);
        return;
      }

      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            locationData.location
          )}&count=1&language=pt&format=json`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          setError("Localização não encontrada");
          setLoading(false);
          return;
        }

        const { latitude, longitude, timezone } = geoData.results[0];

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=${timezone}`
        );
        const weatherData = await weatherRes.json();

        const temp = weatherData.current_weather.temperature;
        const time = weatherData.current_weather.time;

        const hour = new Date(time).getHours();
        const formattedTime = new Date(time).toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        });

        setTemperature(temp);
        setLocalTime(formattedTime);

        // Define período do dia
        if (hour >= 5 && hour < 12) setTimeOfDay("morning");
        else if (hour >= 12 && hour < 18) setTimeOfDay("afternoon");
        else if (hour >= 18 && hour < 22) setTimeOfDay("evening");
        else setTimeOfDay("night");
      } catch (err) {
        setError("Erro ao buscar temperatura");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [locationData]);

  if (loading) return <p>Carregando temperatura...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`temperature-card ${timeOfDay}`}>
      <WiDaySunny size={40} />
      <div className="temperature-info">
        <h3>{locationData.location}</h3>
        <p>{temperature?.toFixed(1)}°C - <span className="local-time">{localTime}</span></p>
      </div>
    </div>
  );
}
