package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.Calendario;
import com.SOS_Clean_House_back.service.CalendarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calendario")
public class CalendarioController {

    @Autowired
    CalendarioService calendarioService;

    @GetMapping
    public ResponseEntity<List<Calendario>> findAll(){
        return ResponseEntity.ok(calendarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Calendario> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(calendarioService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Calendario> create(@RequestBody Calendario calendario){
        return ResponseEntity.ok(calendarioService.save(calendario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Calendario> update(@RequestBody Calendario calendario){
        return ResponseEntity.ok(calendarioService.save(calendario));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Calendario> delete(@PathVariable Integer id){
        Calendario calendario = calendarioService.findById(id);
        calendarioService.delete(calendario);
        return ResponseEntity.ok(calendario);
    }
    
}
