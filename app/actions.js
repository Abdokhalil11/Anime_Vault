"use server";
export async function getData(number) {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${number}&limit=8&order=popularity`
  );
  const data = await res.json();
  return data;
}
