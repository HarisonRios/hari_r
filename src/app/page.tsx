"use client";

import axios from "axios";
import { useEffect, useState, useRef } from "react";

import Spotify from "./components/spotify/spotify";
import Discord from "./components/discord/discord";
import Technology from "./components/technology/technology";
import AboutMe from "./components/aboutme/aboutme";
import Temperature from "./components/temperature/temperature";

import "../styles/globals.scss";
import Navbar from "./partials/navbar";
import Terminal from "./components/terminal/terminal";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    async function getData() {
      try {
        const response = await axios.get(
          "https://api.lanyard.rest/v1/users/398875341554188290"
        );
        setData(response.data.data);

        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            setShowLoading(false);
            // Ativa animação após loading
            if (mainRef.current) {
              mainRef.current.classList.add("reveal");
            }
          }, 500);
        }, 1000);
      } catch (e) {
        console.error("Erro ao buscar dados:", e);
        setLoading(false);
      }
    }

    getData();
    intervalId = setInterval(getData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const spotify = data?.spotify;

  return (
    <>
      {showLoading ? (
        <div className={`loading-screen ${!loading ? "fade-out" : ""}`}>
          <div className="spinner"></div>
          <p className="loading-text">
            {loading ? "Carregando dados..." : "Dados carregados!"}
          </p>
        </div>
      ) : null}

      <main className="main-content" ref={mainRef}>
        <Navbar />

        <div className="dashboard-container">
          <div className="dashboard-item full">
            <AboutMe />
          </div>

          <div className="dashboard-item half">
            <Technology />
          </div>

          <div className="dashboard-item half">
            <Spotify spotify={spotify} />
            <br /> <br  />
            {data && <Discord data={data} />}
          </div>

          <div className="dashboard-item half">
            {data && <Temperature locationData={data.kv} />}
          </div>

          <div className="dashboard-item half">
            <Terminal />
          </div>
        </div>
        <footer>
          <p>© 2025 Harison Rios. Todos os direitos reservados.</p>
        </footer>
      </main>

      {/* <div className="logAPi">
        <h2>Dados da API</h2>
        <p>Dados obtidos da API lanyard.rest:</p>
        <pre>data: {JSON.stringify(data, null, 2)}</pre>
      </div> */}
    </>
  );
}
