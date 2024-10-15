package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Cliente;
import com.SOS_Clean_House_back.model.Cliente;
import com.SOS_Clean_House_back.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

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

    public Cliente validarLogin(String email, String senha){
        return clienteRepository.validarLogin(email, senha);
    }

    public boolean uploadProfileImage(Integer id, MultipartFile imagem) throws IOException {
        Optional<Cliente> clienteOptional = clienteRepository.findById(id);
        if (clienteOptional.isEmpty()) {
            return false;
        }
        Cliente cliente = clienteOptional.get();
        cliente.setFotoPerfil(imagem.getBytes());
        clienteRepository.save(cliente);
        return true;
    }
}
