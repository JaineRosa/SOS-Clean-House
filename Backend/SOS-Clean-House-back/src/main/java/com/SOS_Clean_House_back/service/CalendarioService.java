package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Calendario;
import com.SOS_Clean_House_back.repository.CalendarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalendarioService {

    @Autowired
    CalendarioRepository calendarioRepository;

    public List<Calendario> findAll(){
        return calendarioRepository.findAll();
    }

    public Calendario findById(Integer id){
        return calendarioRepository.findById(id).orElse(null);
    }

    public Calendario save(Calendario calendario){
        return calendarioRepository.save(calendario);
    }

    public void delete(Calendario calendario){
        calendarioRepository.delete(calendario);
    }
    
}
