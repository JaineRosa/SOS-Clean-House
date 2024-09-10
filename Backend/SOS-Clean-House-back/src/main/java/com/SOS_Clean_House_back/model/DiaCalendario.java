package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

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

    @ManyToOne
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;

}
