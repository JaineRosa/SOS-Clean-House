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
public class Prestador {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer tempoExperiencia;
    private byte antecedentesCriminais;
    private byte foto;
    private byte documentos;
    private String sobreMim;
    private List<String> horarios;

}
