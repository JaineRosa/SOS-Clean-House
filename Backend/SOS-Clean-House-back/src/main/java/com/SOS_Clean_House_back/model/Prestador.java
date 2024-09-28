package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data
public class Prestador extends Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer tempoExperiencia;
    private byte[] antecedentesCriminais;
    private byte[] foto;
    private byte[] documentos;
    private String sobreMim;

    @OneToMany(mappedBy = "prestador")
    private List<Agendamento> agendamentos;

    @OneToMany(mappedBy = "prestador")
    private List<AtividadesDesenvolvidas> atividadesDesenvolvidas;

    @OneToMany(mappedBy = "prestador")
    private List<DiaCalendario> diaCalendarios;

    @OneToOne(mappedBy = "prestador")
    private ContaPrestador contaPrestador;

    @OneToMany(mappedBy = "prestador")
    private List<Horario> horarios;
}
