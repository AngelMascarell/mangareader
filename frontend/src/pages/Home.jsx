import React from "react";
import MangaList from "../components/MangaList";
import "../styles/Home.css";

const mockMangas = [
  { id: 1, title: "Naruto", author: "Masashi Kishimoto", coverUrl: "https://via.placeholder.com/200x300", description: "Un ninja con sueños grandes que quiere ser Hokage y proteger a sus amigos mientras descubre su pasado." },
  { id: 2, title: "One Piece", author: "Eiichiro Oda", coverUrl: "https://via.placeholder.com/200x300", description: "Un chico que quiere ser rey de los piratas y encuentra amigos, aventuras y tesoros en su camino a través de los mares." },
];

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a tu Manga Reader</h1>
      <div className="manga-list-wrapper">
        <MangaList mangas={mockMangas} />
      </div>
    </div>
  );
}

export default Home;
