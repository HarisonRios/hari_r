import "./aboutme.scss";
import BlurText from "./blurtext";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function AboutMe() {
  return (
    <div className="about-me-card">
      <div className="content-section">
        <h2> Harison <span className="purple-text">Rios</span></h2>
        <BlurText
          text="Harison Rios"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
        <p> Engenheiro de dados, 19 anos de <span className="purple-text" >São Paulo</span>, Brasil </p>
        <p>No tempo livre, desenvolvo softwares front e back-end, e curto games, rap e trap...</p>
      </div>
    </div>
  );
}