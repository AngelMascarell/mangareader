import React from "react";
import "../styles/ChapterCard.css";

function ChapterCard({ chapter }) {
  return (
    <div className="chapter-card">
      <h4>Capítulo {chapter.number}: {chapter.title}</h4>
    </div>
  );
}

export default ChapterCard;
