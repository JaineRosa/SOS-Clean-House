package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.ContaPrestador;
import com.SOS_Clean_House_back.service.ContaPrestadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/contaPrestador")
public class ContaPrestadorController {

    @Autowired
    ContaPrestadorService contaPrestadorService;

    @GetMapping
    public ResponseEntity<List<ContaPrestador>> findAll(){
        return ResponseEntity.ok(contaPrestadorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContaPrestador> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(contaPrestadorService.findById(id));
    }

    @PostMapping
    public ResponseEntity<ContaPrestador> create(@RequestBody ContaPrestador contaPrestador){
        return ResponseEntity.ok(contaPrestadorService.save(contaPrestador));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContaPrestador> update(@RequestBody ContaPrestador contaPrestador){
        return ResponseEntity.ok(contaPrestadorService.save(contaPrestador));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<ContaPrestador> delete(@PathVariable Integer id){
        ContaPrestador contaPrestador = contaPrestadorService.findById(id);
        contaPrestadorService.delete(contaPrestador);
        return ResponseEntity.ok(contaPrestador);
    }

    @GetMapping("/prestador/{id}")
    public ResponseEntity<ContaPrestador> findByPrestadorId(@PathVariable Integer id){
        return  ResponseEntity.ok(contaPrestadorService.findByPrestadorId(id));
    }
    
}
