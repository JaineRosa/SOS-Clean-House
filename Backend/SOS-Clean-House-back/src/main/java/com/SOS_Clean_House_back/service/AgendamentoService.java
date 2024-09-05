package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Agendamento;
import com.SOS_Clean_House_back.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendamentoService {

    @Autowired
    AgendamentoRepository agendamentoRepository;

    public List<Agendamento> findAll(){
        return agendamentoRepository.findAll();
    }

    public Agendamento findById(Integer id){
        return agendamentoRepository.findById(id).orElse(null);
    }

    public Agendamento save(Agendamento agendamento){
        return agendamentoRepository.save(agendamento);
    }

    public void delete(Agendamento agendamento){
        agendamentoRepository.delete(agendamento);
    }
    
}
