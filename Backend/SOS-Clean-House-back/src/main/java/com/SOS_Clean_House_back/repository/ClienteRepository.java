package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

 
    @Query(value = "select * from usuario where email like :EMAIL and senha like :SENHA",
            nativeQuery = true)
    public Cliente validarLogin(@Param("EMAIL") String email, @Param("SENHA") String senha);

}
