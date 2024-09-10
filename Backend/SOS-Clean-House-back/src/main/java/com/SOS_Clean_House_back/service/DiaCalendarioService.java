package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.DiaCalendario;
import com.SOS_Clean_House_back.repository.DiaCalendarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiaCalendarioService {

    @Autowired
    DiaCalendarioRepository diaCalendarioRepository;

    public List<DiaCalendario> findAll(){
        return diaCalendarioRepository.findAll();
    }

    public DiaCalendario findById(Integer id){
        return diaCalendarioRepository.findById(id).orElse(null);
    }

    public DiaCalendario save(DiaCalendario diaCalendario){
        return diaCalendarioRepository.save(diaCalendario);
    }

    public void delete(DiaCalendario diaCalendario){
        diaCalendarioRepository.delete(diaCalendario);
    }
    
}
