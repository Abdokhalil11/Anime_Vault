import "./landing.css";
import Image from "next/image";
import logo from "@/public/logo.svg";
import introImage from "@/public/anime.png";
export default function Landing() {
  return (
    <div className="landing-page">
      <div className="logo">
        <Image src={logo.src} width={50} height={50} alt="logo-image" />
        <p className="logo-text">
          Explore The <br />
          <span>Diverse Realms</span>
          <br /> of Anime Magic
        </p>
      </div>
      <div className="intro">
        <Image
          src={introImage.src}
          width={100}
          height={100}
          alt="image intro"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
