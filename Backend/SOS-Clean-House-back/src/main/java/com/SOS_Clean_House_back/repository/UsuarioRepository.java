package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
