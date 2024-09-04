package com.SOS_Clean_House_back.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private  Cliente cliente;

}
