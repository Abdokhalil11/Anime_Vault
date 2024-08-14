"use client";
import { getData } from "@/app/actions";
import { useEffect, useState } from "react";
import Anime from "./anime/Anime";
import Image from "next/image";
import loading from "@/public/spinner.svg";
export function InfiniteLoad() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        console.log(page);
        setPage((prev) => prev + 1);
        getData(page).then((res) => setData([...data, ...res]));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  return (
    <section>
      <div className="animes-list">
        {data.map((el, index) => (
          <Anime data={el} key={el.id} index={index} />
        ))}
      </div>
      <Image
        src={loading.src}
        width={30}
        height={30}
        alt="loading"
        style={{ display: "block", margin: "10px auto" }}
      />
    </section>
  );
}
