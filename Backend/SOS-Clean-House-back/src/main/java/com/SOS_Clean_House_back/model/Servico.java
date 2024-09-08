package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    private Integer valorDiario4H;
    private Integer valorDiario8H;
    private Integer tempoReserva;

    @OneToMany(mappedBy = "servico")
    private List<Horario> horarios;

    @OneToOne
    @JoinColumn(name = "agendamento_id")
    private Agendamento agendamento;

    @OneToOne
    @JoinColumn(name = "endereco_servico_id")
    private EnderecoServico enderecoServico;

    @ManyToOne
    @JoinColumn(name = "tipo_servico_id")
    private TipoServico tipoServico;

    @ManyToMany
    @JoinTable(
            name = "servico_agendamento",
            joinColumns = @JoinColumn(name = "servico_id"),
            inverseJoinColumns = @JoinColumn(name = "agendamento_id")
    )
    private List<Agendamento> agendamentosRelacionados;

    @ManyToMany
    @JoinTable(
            name = "servico_atividades",
            joinColumns = @JoinColumn(name = "servico_id"),
            inverseJoinColumns = @JoinColumn(name = "atividade_id")
    )
    private List<AtividadesDesenvolvidas> atividadesDesenvolvidas;
}
