"use server";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch anime data");
  }

  const data = await response.json();

  return data;
};
