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
          Harison <span className="purple-text">Rios</span>
        </h2>
        <p>
          Engenheiro de dados, 19 anos de São Paulo, Brasil 🇧🇷<br/>
          Trabalho como engenheiro de dados em uma startup de tecnologia, porém por hobby desenvolvo softwares front-end e back-end.
          Amo tecnologia, jogos e rap e trap.
        </p>
      </div>
    </div>
  );
}