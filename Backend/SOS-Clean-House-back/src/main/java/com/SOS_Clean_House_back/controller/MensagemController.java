package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.Mensagem;
import com.SOS_Clean_House_back.service.MensagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mensagem")
public class MensagemController {

    @Autowired
    MensagemService mensagemService;

    @GetMapping
    public ResponseEntity<List<Mensagem>> findAll(){
        return ResponseEntity.ok(mensagemService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mensagem> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(mensagemService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Mensagem> create(@RequestBody Mensagem mensagem){
        return ResponseEntity.ok(mensagemService.save(mensagem));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Mensagem> update(@RequestBody Mensagem mensagem){
        return ResponseEntity.ok(mensagemService.save(mensagem));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Mensagem> delete(@PathVariable Integer id){
        Mensagem mensagem = mensagemService.findById(id);
        mensagemService.delete(mensagem);
        return ResponseEntity.ok(mensagem);
    }
        
}
