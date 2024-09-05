package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.AtividadesDesenvolvidas;
import com.SOS_Clean_House_back.repository.AtividadesDesenvolvidasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtividadesDesenvolvidasService {

    @Autowired
    AtividadesDesenvolvidasRepository atividadesDesenvolvidasRepository;

    public List<AtividadesDesenvolvidas> findAll(){
        return atividadesDesenvolvidasRepository.findAll();
    }

    public AtividadesDesenvolvidas findById(Integer id){
        return atividadesDesenvolvidasRepository.findById(id).orElse(null);
    }

    public AtividadesDesenvolvidas save(AtividadesDesenvolvidas atividadesDesenvolvidas){
        return atividadesDesenvolvidasRepository.save(atividadesDesenvolvidas);
    }

    public void delete(AtividadesDesenvolvidas atividadesDesenvolvidas){
        atividadesDesenvolvidasRepository.delete(atividadesDesenvolvidas);
    }
    
}
