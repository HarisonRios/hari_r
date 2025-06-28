export const github_url = "https://github.com/HarisonRios";
export const discord_url = "https://discord.com/users/hariisu_";
export const spotify_url = "https://open.spotify.com/playlist/6fiyHiNYi1gDeaRn9ONCcy";
export const linkedin_url = "https://www.linkedin.com/in/harisonrios/";
export const instagram_url = "https://www.instagram.com/harison_rioos/";
export const email_url = "mailto:hharison562@gmail.com.br";

export type SpotifyData = {
  album_art_url: string;
  song: string;
  artist: string;
  album: string;
  timestamps: {
    start: number;
    end: number;
  };
};

export type DiscordUser = {
  id: string;
  username: string;
  avatar: string;
  global_name: string;
  display_name: string;
};

export type Activity = {
  name: string;
  type: number;
  details?: string;
};

export type DiscordData = {
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: "online" | "idle" | "dnd" | "offline";
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
};


export const kvData = {
  location: "São Paulo "+ "Brasil",
  latitude: -23.55,
  longitude: -46.63,
};

export type KvDataType = typeof kvData;

export type TemperatureProps = {
  locationData: KvDataType;
};
