package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.EnderecoServico;
import com.SOS_Clean_House_back.service.EnderecoServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/enderecoServico")
public class EnderecoServicoController {

    @Autowired
    EnderecoServicoService enderecoServicoService;

    @GetMapping
    public ResponseEntity<List<EnderecoServico>> findAll(){
        return ResponseEntity.ok(enderecoServicoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnderecoServico> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(enderecoServicoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<EnderecoServico> create(@RequestBody EnderecoServico enderecoServico){
        return ResponseEntity.ok(enderecoServicoService.save(enderecoServico));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnderecoServico> update(@RequestBody EnderecoServico enderecoServico){
        return ResponseEntity.ok(enderecoServicoService.save(enderecoServico));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<EnderecoServico> delete(@PathVariable Integer id){
        EnderecoServico enderecoServico = enderecoServicoService.findById(id);
        enderecoServicoService.delete(enderecoServico);
        return ResponseEntity.ok(enderecoServico);
    }
    
}
