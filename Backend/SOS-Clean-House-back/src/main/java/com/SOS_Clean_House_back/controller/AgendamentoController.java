package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.Agendamento;
import com.SOS_Clean_House_back.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agendamento")
public class AgendamentoController {

    @Autowired
    AgendamentoService agendamentoService;

    @GetMapping
    public ResponseEntity<List<Agendamento>> findAll() {
        return ResponseEntity.ok(agendamentoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Agendamento> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(agendamentoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Agendamento> create(@RequestBody Agendamento agendamento) {
        return ResponseEntity.ok(agendamentoService.save(agendamento));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Agendamento> update(@RequestBody Agendamento agendamento) {
        return ResponseEntity.ok(agendamentoService.save(agendamento));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Agendamento> delete(@PathVariable Integer id) {
        Agendamento agendamento = agendamentoService.findById(id);
        agendamentoService.delete(agendamento);
        return ResponseEntity.ok(agendamento);
    }

    @GetMapping("/cliente/{clienteId}")
    public List<Agendamento> getAgendamentosByCliente(@PathVariable Integer clienteId) {
        return agendamentoService.getAgendamentosByCliente(clienteId);
    }
}