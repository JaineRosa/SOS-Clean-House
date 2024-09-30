package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.Prestador;
import com.SOS_Clean_House_back.service.PrestadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/prestador")
public class PrestadorController {
    
    @Autowired
    PrestadorService prestadorService;

    @GetMapping
    public ResponseEntity<List<Prestador>> findAll(){
        return ResponseEntity.ok(prestadorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prestador> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(prestadorService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Prestador> create(@RequestBody Prestador prestador){
        return ResponseEntity.ok(prestadorService.save(prestador));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Prestador> update(@RequestBody Prestador prestador){
        return ResponseEntity.ok(prestadorService.save(prestador));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Prestador> delete(@PathVariable Integer id){
        Prestador prestador = prestadorService.findById(id);
        prestadorService.delete(prestador);
        return ResponseEntity.ok(prestador);
    }

    @PostMapping("/login")
    public ResponseEntity<Prestador> validarLogin(@RequestBody Map<String, Object> credenciais) {
        String email = credenciais.get("EMAIL").toString();
        String senha = credenciais.get("SENHA").toString();
        return ResponseEntity.ok(prestadorService.validarLogin(email, senha));
    }
}
