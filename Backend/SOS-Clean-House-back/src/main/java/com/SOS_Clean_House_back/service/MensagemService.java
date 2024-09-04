package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Mensagem;
import com.SOS_Clean_House_back.repository.MensagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MensagemService {
    
    @Autowired
    MensagemRepository mensagemRepository;

    public List<Mensagem> findAll(){
        return mensagemRepository.findAll();
    }

    public Mensagem findById(Integer id){
        return mensagemRepository.findById(id).orElse(null);
    }

    public Mensagem save(Mensagem mensagem){
        return mensagemRepository.save(mensagem);
    }

    public void delete(Mensagem mensagem){
        mensagemRepository.delete(mensagem);
    }
    
}
