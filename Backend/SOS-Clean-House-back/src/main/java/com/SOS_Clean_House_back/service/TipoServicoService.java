package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.TipoServico;
import com.SOS_Clean_House_back.repository.TipoServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipoServicoService {

    @Autowired
    TipoServicoRepository tipoServicoRepository;

    public List<TipoServico> findAll(){
        return tipoServicoRepository.findAll();
    }

    public TipoServico findById(Integer id){
        return tipoServicoRepository.findById(id).orElse(null);
    }

    public TipoServico save(TipoServico tipoServico){
        return tipoServicoRepository.save(tipoServico);
    }

    public void delete(TipoServico tipoServico){
        tipoServicoRepository.delete(tipoServico);
    }
    
}
