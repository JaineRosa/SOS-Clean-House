package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class Calendario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private LocalDateTime data;
    private Boolean status;
//    private Servico servicoIntegral;
//    private Servico servicoMeioManha;
//    private Servico servicoMeioTarde;
    private Integer taxaExtraMeia;

    @ManyToOne
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;

}
