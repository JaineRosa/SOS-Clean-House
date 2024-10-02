package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Servico;
import com.SOS_Clean_House_back.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {
    
    @Autowired
    ServicoRepository servicoRepository;

    public List<Servico> findAll(){
        return servicoRepository.findAll();
    }

    public Servico findById(Integer id){
        return servicoRepository.findById(id).orElse(null);
    }

    public Servico save(Servico servico){
        return servicoRepository.save(servico);
    }

    public void delete(Servico servico){
        servicoRepository.delete(servico);
    }

    public List<Servico> getServicosByPrestador(Integer prestadorId) {
        return servicoRepository.findByPrestadorId(prestadorId);
    }
}
