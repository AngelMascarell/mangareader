package com.mangareader.backend.controllers;

import com.mangareader.backend.entities.MangaEntity;
import com.mangareader.backend.repositories.MangaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mangas")
public class MangaController {

    private final MangaRepository mangaRepository;

    public MangaController(MangaRepository mangaRepository) {
        this.mangaRepository = mangaRepository;
    }

    // Endpoint para obtener todos los mangas
    @GetMapping
    public List<MangaEntity> getAllMangas() {
        return mangaRepository.findAll();
    }

    // Endpoint de prueba para crear un manga
    @PostMapping("/create")
    public MangaEntity createManga(@RequestBody MangaEntity mangaEntity) {
        return mangaRepository.save(mangaEntity);
    }
}
