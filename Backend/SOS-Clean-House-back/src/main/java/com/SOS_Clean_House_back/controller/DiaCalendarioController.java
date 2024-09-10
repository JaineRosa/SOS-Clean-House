package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.DiaCalendario;
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
    public ResponseEntity<List<DiaCalendario>> findAll(){
        return ResponseEntity.ok(calendarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DiaCalendario> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(calendarioService.findById(id));
    }

    @PostMapping
    public ResponseEntity<DiaCalendario> create(@RequestBody DiaCalendario diaCalendario){
        return ResponseEntity.ok(calendarioService.save(diaCalendario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DiaCalendario> update(@RequestBody DiaCalendario diaCalendario){
        return ResponseEntity.ok(calendarioService.save(diaCalendario));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<DiaCalendario> delete(@PathVariable Integer id){
        DiaCalendario diaCalendario = calendarioService.findById(id);
        calendarioService.delete(diaCalendario);
        return ResponseEntity.ok(diaCalendario);
    }
    
}
