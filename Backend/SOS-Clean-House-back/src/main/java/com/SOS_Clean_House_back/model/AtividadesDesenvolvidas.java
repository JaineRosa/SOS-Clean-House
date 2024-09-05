package com.SOS_Clean_House_back.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private Prestador prestador;

}
