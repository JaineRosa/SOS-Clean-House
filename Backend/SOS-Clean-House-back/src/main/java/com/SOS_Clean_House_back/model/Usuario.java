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
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nomeCompleto;
    private String email;
    private String endereco;
    private Integer telefone;
    private Date dataNascimento;
    private String cpf;
    private String senha;
    private String confirmarSenha;
    private byte fotoPerfil;


}
