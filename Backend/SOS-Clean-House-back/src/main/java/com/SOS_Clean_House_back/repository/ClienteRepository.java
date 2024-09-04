package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
