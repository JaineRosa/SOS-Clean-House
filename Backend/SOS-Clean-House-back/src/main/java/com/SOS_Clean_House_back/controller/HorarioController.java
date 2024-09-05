package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.Horario;
import com.SOS_Clean_House_back.service.HorarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/horario")
public class HorarioController {

    @Autowired
    HorarioService horarioService;

    @GetMapping
    public ResponseEntity<List<Horario>> findAll(){
        return ResponseEntity.ok(horarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Horario> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(horarioService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Horario> create(@RequestBody Horario horario){
        return ResponseEntity.ok(horarioService.save(horario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Horario> update(@RequestBody Horario horario){
        return ResponseEntity.ok(horarioService.save(horario));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Horario> delete(@PathVariable Integer id){
        Horario horario = horarioService.findById(id);
        horarioService.delete(horario);
        return ResponseEntity.ok(horario);
    }
    
}
