package com.SOS_Clean_House_back.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class Horario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String horarioInicio;
    private String horarioFim;
    private Boolean meioPeriodo;




    @ManyToOne
    @JoinColumn(name = "servico_id")
    private Servico servico;


    @ManyToOne
    @JoinColumn(name = "prestador_id")
    private Prestador prestador;

}
