package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Horario;
import com.SOS_Clean_House_back.repository.HorarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HorarioService {

    @Autowired
    HorarioRepository horarioRepository;

    public List<Horario> findAll(){
        return horarioRepository.findAll();
    }

    public Horario findById(Integer id){
        return horarioRepository.findById(id).orElse(null);
    }

    public Horario save(Horario horario){
        return horarioRepository.save(horario);
    }

    public void delete(Horario horario){
        horarioRepository.delete(horario);
    }
    
}
