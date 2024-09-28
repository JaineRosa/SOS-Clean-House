package com.SOS_Clean_House_back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String valorDiario4H;
    private String valorDiario8H;
    private String tempoReserva;
    private List<String> diasDaSemana;
    private String servico;


    @ManyToOne
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;



}
