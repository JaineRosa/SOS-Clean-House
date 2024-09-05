package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.TipoServico;
import com.SOS_Clean_House_back.service.TipoServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tipoServico")
public class TipoServicoController {

    @Autowired
    TipoServicoService tipoServicoService;

    @GetMapping
    public ResponseEntity<List<TipoServico>> findAll(){
        return ResponseEntity.ok(tipoServicoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoServico> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(tipoServicoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<TipoServico> create(@RequestBody TipoServico tipoServico){
        return ResponseEntity.ok(tipoServicoService.save(tipoServico));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoServico> update(@RequestBody TipoServico tipoServico){
        return ResponseEntity.ok(tipoServicoService.save(tipoServico));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<TipoServico> delete(@PathVariable Integer id){
        TipoServico tipoServico = tipoServicoService.findById(id);
        tipoServicoService.delete(tipoServico);
        return ResponseEntity.ok(tipoServico);
    }
    
}
