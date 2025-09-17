import React from "react";
import { Link } from "react-router-dom";
import "../styles/MangaCard.css";

function MangaCard({ id, title, author, coverUrl, description }) {
  return (
    <Link to={`/manga/${id}`} className="manga-card">
      <img
        src={coverUrl || "https://via.placeholder.com/200x300?text=No+Cover"}
        alt={title}
      />
      <h3>{title}</h3>
      <p><strong>Autor:</strong> {author}</p>
      <p>{description?.length > 100 ? description.substring(0, 100) + "..." : description}</p>
    </Link>
  );
}

export default MangaCard;
