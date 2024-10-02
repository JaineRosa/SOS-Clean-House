package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.Agendamento;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Integer> {

    List<Agendamento> findByClienteId(Integer clienteId);

}
