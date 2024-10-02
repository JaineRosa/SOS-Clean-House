package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.Servico;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {

    List<Servico> findByPrestadorId(Integer prestadorId);

}
