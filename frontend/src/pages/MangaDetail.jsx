import React from "react";
import { useParams } from "react-router-dom";
import ChapterList from "../components/ChapterList";
import "../styles/MangaDetail.css";


// Datos simulados de varios mangas
const mockMangas = [
  {
    id: 1,
    title: "Naruto",
    author: "Masashi Kishimoto",
    coverUrl: "https://via.placeholder.com/200x300",
    description: "Un ninja con sueños grandes que quiere ser Hokage y proteger a sus amigos mientras descubre su pasado.",
    chapters: [
      { id: 1, number: 1, title: "El inicio de Naruto" },
      { id: 2, number: 2, title: "El examen de los ninjas" },
      { id: 3, number: 3, title: "El desafío del equipo 7" },
    ]
  },
  {
    id: 2,
    title: "One Piece",
    author: "Eiichiro Oda",
    coverUrl: "https://via.placeholder.com/200x300",
    description: "Un chico que quiere ser rey de los piratas y encuentra amigos, aventuras y tesoros en su camino a través de los mares.",
    chapters: [
      { id: 4, number: 1, title: "El inicio de la aventura" },
      { id: 5, number: 2, title: "El barco de los sueños" },
    ]
  }
];

function MangaDetail() {
  const { id } = useParams();
  const manga = mockMangas.find(m => m.id === parseInt(id));

  if (!manga) {
    return <p>Manga no encontrado.</p>;
  }

  return (
    <div>
      <h2>{manga.title}</h2>
      <p><strong>Autor:</strong> {manga.author}</p>
      <img src={manga.coverUrl} alt={manga.title} />
      <p>{manga.description}</p>

      <h3>Capítulos</h3>
      <ChapterList chapters={manga.chapters} />
    </div>
  );
}

export default MangaDetail;
