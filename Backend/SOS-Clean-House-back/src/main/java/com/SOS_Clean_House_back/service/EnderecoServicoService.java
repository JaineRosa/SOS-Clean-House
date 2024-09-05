package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.EnderecoServico;
import com.SOS_Clean_House_back.repository.EnderecoServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoServicoService {

    @Autowired
    EnderecoServicoRepository enderecoServicoRepository;

    public List<EnderecoServico> findAll(){
        return enderecoServicoRepository.findAll();
    }

    public EnderecoServico findById(Integer id){
        return enderecoServicoRepository.findById(id).orElse(null);
    }

    public EnderecoServico save(EnderecoServico enderecoServico){
        return enderecoServicoRepository.save(enderecoServico);
    }

    public void delete(EnderecoServico enderecoServico){
        enderecoServicoRepository.delete(enderecoServico);
    }
    
}
