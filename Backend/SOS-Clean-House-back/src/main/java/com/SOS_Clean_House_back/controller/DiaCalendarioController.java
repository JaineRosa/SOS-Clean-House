package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.DiaCalendario;
import com.SOS_Clean_House_back.service.DiaCalendarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calendario")
public class DiaCalendarioController {

    @Autowired
    DiaCalendarioService diaCalendarioService;

    @GetMapping
    public ResponseEntity<List<DiaCalendario>> findAll(){
        return ResponseEntity.ok(diaCalendarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DiaCalendario> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(diaCalendarioService.findById(id));
    }

    @PostMapping
    public ResponseEntity<DiaCalendario> create(@RequestBody DiaCalendario diaCalendario){
        return ResponseEntity.ok(diaCalendarioService.save(diaCalendario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DiaCalendario> update(@RequestBody DiaCalendario diaCalendario){
        return ResponseEntity.ok(diaCalendarioService.save(diaCalendario));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<DiaCalendario> delete(@PathVariable Integer id){
        DiaCalendario diaCalendario = diaCalendarioService.findById(id);
        diaCalendarioService.delete(diaCalendario);
        return ResponseEntity.ok(diaCalendario);
    }
    
}
