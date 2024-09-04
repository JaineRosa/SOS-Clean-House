package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.ClienteCartao;
import com.SOS_Clean_House_back.repository.ClienteCartaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteCartaoService {

    @Autowired
    ClienteCartaoRepository clienteCartaoRepository;

    public List<ClienteCartao> findAll(){
        return clienteCartaoRepository.findAll();
    }

    public ClienteCartao findById(Integer id){
        return clienteCartaoRepository.findById(id).orElse(null);
    }

    public ClienteCartao save(ClienteCartao clienteCartao){
        return clienteCartaoRepository.save(clienteCartao);
    }

    public void delete(ClienteCartao clienteCartao){
        clienteCartaoRepository.delete(clienteCartao);
    }
}
