package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.Cliente;
import com.SOS_Clean_House_back.model.Prestador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PrestadorRepository extends JpaRepository<Prestador, Integer> {

    @Query(value = " SELECT *" +
            "FROM usuario " +
            "INNER JOIN prestador ON usuario.id = prestador.id " +
            "WHERE email = :EMAIL AND senha = :SENHA",
            nativeQuery = true)
    public Prestador validarLogin(@Param("EMAIL") String email, @Param("SENHA") String senha);


}
