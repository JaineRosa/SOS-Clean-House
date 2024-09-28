package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.util.Date;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class ClienteCartao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Integer Id;

    private  String nomeCompleto;
    private BigInteger numeroCartao;
    private Date dataValidade;
    private  Integer cvv;
    private  String cpf;
    private  Boolean favorito;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
}
