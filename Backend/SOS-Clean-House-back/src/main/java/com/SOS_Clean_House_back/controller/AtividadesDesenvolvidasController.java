package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.AtividadesDesenvolvidas;
import com.SOS_Clean_House_back.service.AtividadesDesenvolvidasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/atividadesDesenvolvidas")
public class AtividadesDesenvolvidasController {

    @Autowired
    AtividadesDesenvolvidasService atividadesDesenvolvidasService;

    @GetMapping
    public ResponseEntity<List<AtividadesDesenvolvidas>> findAll(){
        return ResponseEntity.ok(atividadesDesenvolvidasService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AtividadesDesenvolvidas> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(atividadesDesenvolvidasService.findById(id));
    }

    @PostMapping
    public ResponseEntity<AtividadesDesenvolvidas> create(@RequestBody AtividadesDesenvolvidas atividadesDesenvolvidas){
        return ResponseEntity.ok(atividadesDesenvolvidasService.save(atividadesDesenvolvidas));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AtividadesDesenvolvidas> update(@RequestBody AtividadesDesenvolvidas atividadesDesenvolvidas){
        return ResponseEntity.ok(atividadesDesenvolvidasService.save(atividadesDesenvolvidas));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<AtividadesDesenvolvidas> delete(@PathVariable Integer id){
        AtividadesDesenvolvidas atividadesDesenvolvidas = atividadesDesenvolvidasService.findById(id);
        atividadesDesenvolvidasService.delete(atividadesDesenvolvidas);
        return ResponseEntity.ok(atividadesDesenvolvidas);
    }
    
}
