package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Cliente;
import com.SOS_Clean_House_back.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public List<Cliente> findAll(){
        return clienteRepository.findAll();
    }

    public Cliente findById(Integer id){
        return clienteRepository.findById(id).orElse(null);
    }

    public Cliente save(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public void delete(Cliente cliente){
        clienteRepository.delete(cliente);
    }
    
}
