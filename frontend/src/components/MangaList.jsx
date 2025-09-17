import React from "react";
import MangaCard from "./MangaCard";

function MangaList({ mangas }) {
  if (!mangas || mangas.length === 0) {
    return <p>No hay mangas disponibles.</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
      {mangas.map(manga => (
        <MangaCard
          key={manga.id}
          id={manga.id}
          title={manga.title}
          author={manga.author}
          coverUrl={manga.coverUrl}
          description={manga.description}
        />
      ))}
    </div>
  );
}

export default MangaList;
