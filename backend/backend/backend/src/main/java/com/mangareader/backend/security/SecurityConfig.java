package com.mangareader.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Desactivamos CSRF porque no usamos formularios (API REST)
                .csrf(csrf -> csrf.disable())

                // Configuramos permisos
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/mangas/**").permitAll() // rutas públicas
                        .requestMatchers("/auth/**").permitAll()   // login/register público
                        .anyRequest().authenticated()              // resto requiere auth
                )

                // Desactivamos sesiones (stateless) si usamos JWT
                .sessionManagement(session -> session
                        .sessionCreationPolicy(
                                org.springframework.security.config.http.SessionCreationPolicy.STATELESS)
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
