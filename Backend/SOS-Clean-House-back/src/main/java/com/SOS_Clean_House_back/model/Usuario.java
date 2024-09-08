package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


@Inheritance(strategy = InheritanceType.JOINED)
@AllArgsConstructor @NoArgsConstructor @Data
@Entity
public  class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nomeCompleto;
    private String email;
    private String endereco;
    private String telefone;
    private Date dataNascimento;
    private String cpf;
    private String senha;
    private String confirmarSenha;
    private byte[] fotoPerfil;

    @ManyToMany(mappedBy = "usuarios")
    private List<Chat> chats;
}
