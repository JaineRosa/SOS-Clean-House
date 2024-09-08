package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class AtividadesDesenvolvidas {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Integer id;
    private List<String> atividades;

    @ManyToOne
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;

    @ManyToMany(mappedBy = "atividadesDesenvolvidas")
    private List<Servico> servicos;
}
