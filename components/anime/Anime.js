import episode from "@/public/episodes.svg";
import star from "@/public/star.svg";
import "./anime.css";
import AnimeMotion from "./AnimeMotion";
export default function Anime({ data, index }) {
  return (
    <AnimeMotion index={index}>
      <div className="anime">
        <div className="poster">
          <img
            src={"https://shikimori.one" + data.image.original}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="name-type">
          <p className="name" title={data.name}>
            {data.name}
          </p>
          <p className="type">{data.kind}</p>
        </div>
        <div className="details">
          <div className="episodes">
            <img src={episode.src} alt="" />
            <span>{data.episodes}</span>
          </div>
          <div className="score">
            <img src={star.src} alt="" />
            <span>{data.score}</span>
          </div>
        </div>
      </div>
    </AnimeMotion>
  );
}
