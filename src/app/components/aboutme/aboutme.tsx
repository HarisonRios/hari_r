import Image from "next/image";
import myAvatar from '../../../../public/trap.jpg';
import "./aboutme.scss";

export default function AboutMe() {
   return (
    <div className="about-me-card">
      <div className="avatar-section">
        <Image 
          src={myAvatar}
          alt="Avatar de Harison" 
          width={150}
          height={150}
          className="my-avatar"
        />
      </div>
      <div className="content-section">
        <h2>
          Hari<span className="purple-text">son</span>
        </h2>
        <p>
          Engenheiro de dados de 19 anos de São Paulo, Brasil{' '}
          <span role="img" aria-label="Bandeira do Brasil">🇧🇷</span>.
          Trabalho com dados, porém por hobby desenvolvo software front-end e back-end.
          Amo tecnologia, jogos e rap e trap.
        </p>
      </div>
    </div>
  );
}