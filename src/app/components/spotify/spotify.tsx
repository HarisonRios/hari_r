"use client";

import { useEffect, useState } from "react";
import { SpotifyData } from "@/app/components/constants/types";
import Image from "next/image";
import "./spotify.scss";


function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function Spotify({ spotify }: { spotify: SpotifyData }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const duration = spotify.timestamps.end - spotify.timestamps.start;
  const progress = Math.min(now - spotify.timestamps.start, duration);
  const percentage = Math.min((progress / duration) * 100, 100);

  return (
    <div className="spotify-card">
      <Image
        src={spotify.album_art_url}
        alt="Capa do álbum"
        width={100}
        height={100}
      />
      <div className="spotify-info">
        <h2>{spotify.song}</h2>
        <p>{spotify.artist} — {spotify.album}</p>
        <p>{formatTime(progress)} / {formatTime(duration)}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </div>
  );
}
