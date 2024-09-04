package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.Servico;
import com.SOS_Clean_House_back.service.ServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servico")
public class ServicoController {

    @Autowired
    ServicoService servicoService;

    @GetMapping
    public ResponseEntity<List<Servico>> findAll(){
        return ResponseEntity.ok(servicoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servico> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(servicoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Servico> create(@RequestBody Servico servico){
        return ResponseEntity.ok(servicoService.save(servico));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Servico> update(@RequestBody Servico servico){
        return ResponseEntity.ok(servicoService.save(servico));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Servico> delete(@PathVariable Integer id){
        Servico servico = servicoService.findById(id);
        servicoService.delete(servico);
        return ResponseEntity.ok(servico);
    }
    
}
