package com.SOS_Clean_House_back.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import java.util.List;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder


public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    private String valorDiario4H;
    private String valorDiario8H;
    private String tempoReserva;
    private String observacoes;
    private String servico;
    private List<String> diasDaSemana;
    private List<String> atividades;

    @ManyToOne()
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;

    @OneToMany(mappedBy = "servico")
    private List<Horario> horarios;

}
