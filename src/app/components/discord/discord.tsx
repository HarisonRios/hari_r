import Image from "next/image";
import "./discord.scss";
import { DiscordData } from "@/app/components/constants/types";
import { FaSpotify, FaCode } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

type Props = {
  data: DiscordData;
};

export default function Discord({ data }: Props) {
  if (!data || !data.discord_user) return null; 

  const user = data.discord_user;
  const activity = data.activities?.[0];
  const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  function getActivityIcon(name: string) {
    if (name.toLowerCase().includes("spotify")) return <FaSpotify />;
    if (name.toLowerCase().includes("code")) return <FaCode />;
    return <BsDiscord />;
  }

  function getStatusColor() {
    switch (data.discord_status) {
      case "online":
        return "green";
      case "idle":
        return "yellow";
      case "dnd":
        return "red";
      default:
        return "gray";
    }
  }

  return (
    <div className="discord-card">
      <div className="discord-icon">
        <BsDiscord />
      </div>

<div className="avatar-wrapper">
  <div className="avatar-container">
    <Image src={avatarUrl} alt="Avatar" width={80} height={80} />
  </div>
  <span className={`status-indicator ${getStatusColor()}`}></span>
</div>


      <div className="discord-info">
        <h2>{user.global_name || user.username}</h2>
        <p>@{user.username}</p>

        {activity && (
          <div className="activity">
            {getActivityIcon(activity.name)}
            <span>{activity.name} {activity.details && `— ${activity.details}`}</span>
          </div>
        )}
      </div>
    </div>
  );
}
