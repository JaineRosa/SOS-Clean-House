package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Prestador;
import com.SOS_Clean_House_back.repository.PrestadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrestadorService {

    @Autowired
    PrestadorRepository prestadorRepository;

    public List<Prestador> findAll(){
        return prestadorRepository.findAll();
    }

    public Prestador findById(Integer id){
        return prestadorRepository.findById(id).orElse(null);
    }

    public Prestador save(Prestador prestador){
        return prestadorRepository.save(prestador);
    }

    public void delete(Prestador prestador){
        prestadorRepository.delete(prestador);
    }
    public Prestador validarLogin(String email, String senha){
        return prestadorRepository.validarLogin(email, senha);
    }
}
