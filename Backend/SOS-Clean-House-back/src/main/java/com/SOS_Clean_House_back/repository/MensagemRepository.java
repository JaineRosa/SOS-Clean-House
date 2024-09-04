package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.Mensagem;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MensagemRepository extends JpaRepository<Mensagem, Integer> {
}
