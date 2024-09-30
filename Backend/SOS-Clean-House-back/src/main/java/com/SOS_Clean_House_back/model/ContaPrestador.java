package com.SOS_Clean_House_back.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class ContaPrestador {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nomeTitular;
    private String agencia;
    private String conta;
    private String cnpj;
    private String cpf;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToOne
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;

}
