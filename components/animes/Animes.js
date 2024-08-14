import Anime from "../anime/Anime";
import { InfiniteLoad } from "../infinite-load";
import "./animes.css";
import { getData } from "@/app/actions";

export default async function Animes() {
  const data = await getData(1);
  return (
    <div className="animes">
      <h3>Explore Anime</h3>
      <div className="animes-list">
        {data.map((el, index) => (
          <Anime data={el} key={el.id} index={index} />
        ))}
      </div>
      <InfiniteLoad />
    </div>
  );
}
