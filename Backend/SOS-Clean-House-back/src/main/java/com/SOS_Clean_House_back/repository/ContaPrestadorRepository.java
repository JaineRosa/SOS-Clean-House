package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.ContaPrestador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface ContaPrestadorRepository extends JpaRepository<ContaPrestador, Integer> {

    public ContaPrestador findByPrestadorId(@Param("ID") Integer id);

}
