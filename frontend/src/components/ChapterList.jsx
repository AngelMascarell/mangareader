import React from "react";
import ChapterCard from "./ChapterCard";
import "../styles/ChapterList.css";

function ChapterList({ chapters }) {
  if (!chapters || chapters.length === 0) {
    return <p>No hay capítulos disponibles.</p>;
  }

  return (
    <div className="chapter-list">
      {chapters.map(chapter => (
        <ChapterCard key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
}

export default ChapterList;
