import { FaLinkedin ,FaGithub, FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";
import { discord_url, email_url, github_url, instagram_url, linkedin_url } from "../components/constants/types";
  
export default function Navbar() {
  return (
    <>
     <nav className="navbar">
      <div className="left">
        <span className="purple-text">/</span>
      </div>
      <div className="right">
        <a href={github_url} target="_blank" rel="noopener noreferrer" aria-label="HarisonRios">
          <FaGithub />
        </a>
        <a href={linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="Harison Rios">
          <FaLinkedin />
        </a>
        <a href={email_url} aria-label="hharison562@gmail.com">
          <FaEnvelope />
        </a>
        <a href={instagram_url} target="_blank" rel="noopener noreferrer" aria-label="@harison_rioos">
          <FaInstagram />
        </a>
         <a href={discord_url} target="_blank" rel="noopener noreferrer" aria-label="@hariisu_">
          <FaDiscord />
        </a>
      </div>
    </nav>
    </>
  )
}