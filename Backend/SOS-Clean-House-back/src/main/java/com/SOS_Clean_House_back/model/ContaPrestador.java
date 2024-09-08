package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class ContaPrestador {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nomeTitular;
    private Integer agencia;
    private Integer conta;
    private String cnpj;
    private String cpf;

    @OneToOne
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;

}
