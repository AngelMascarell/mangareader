package com.mangareader.backend.repositories;

import com.mangareader.backend.entities.MangaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MangaRepository extends JpaRepository<MangaEntity, Long> {
    // Más adelante podemos agregar consultas personalizadas
}
