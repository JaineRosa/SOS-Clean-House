package com.SOS_Clean_House_back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class DiaCalendario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private LocalDateTime data;
    private Boolean isDisponibilidade;
    private Boolean isIntegral;
    private Boolean isMeioManha;
    private Boolean isMeioTarde;
    private Integer taxaExtraMeia;
    private List<String> diasDaSemana;


    @ManyToOne
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;

}
