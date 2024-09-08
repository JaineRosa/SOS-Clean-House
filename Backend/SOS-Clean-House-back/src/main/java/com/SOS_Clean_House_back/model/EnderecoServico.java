package com.SOS_Clean_House_back.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class EnderecoServico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String rua;
    private Integer numero;
    private String bairro;
    private String cidade;
    private Integer cep;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @OneToOne(mappedBy = "enderecoServico")
    private Servico servico;

    @OneToOne
    @JoinColumn(name = "servico_id")
    private Servico servicoReference;
}
