package com.mangareader.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "mangas")
@AllArgsConstructor
@NoArgsConstructor
public class MangaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private String title;

    private String description;
    private String coverUrl;

    private Long authorId; // más adelante lo podemos mapear con @ManyToOne a User

    private LocalDateTime createdAt = LocalDateTime.now();
}
