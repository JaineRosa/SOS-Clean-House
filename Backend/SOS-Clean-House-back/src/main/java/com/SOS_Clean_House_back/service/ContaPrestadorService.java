package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.ContaPrestador;
import com.SOS_Clean_House_back.model.Prestador;
import com.SOS_Clean_House_back.repository.ContaPrestadorRepository;
import com.SOS_Clean_House_back.repository.PrestadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContaPrestadorService {

    @Autowired
    ContaPrestadorRepository contaPrestadorRepository;

    public List<ContaPrestador> findAll(){
        return contaPrestadorRepository.findAll();
    }

    public ContaPrestador findById(Integer id){
        return contaPrestadorRepository.findById(id).orElse(null);
    }

    public ContaPrestador save(ContaPrestador contaPrestador){
        return contaPrestadorRepository.save(contaPrestador);
    }

    public void delete(ContaPrestador contaPrestador){
        contaPrestadorRepository.delete(contaPrestador);
    }

    public ContaPrestador findByPrestadorId(Integer id){
        return contaPrestadorRepository.findByPrestadorId(id);
    }
}
