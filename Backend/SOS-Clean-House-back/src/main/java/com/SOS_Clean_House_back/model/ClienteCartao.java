package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class ClienteCartao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Integer Id;

    private  String nomeCompleto;
    private  Integer numeroCartao;
    private Date dataValidade;
    private  Integer cvv;
    private  String cpf;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
}
