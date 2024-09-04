package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.ClienteCartao;
import com.SOS_Clean_House_back.service.ClienteCartaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clienteCartao")
public class ClienteCartaoController {

    @Autowired
    ClienteCartaoService clienteCartaoService;

    @GetMapping
    public ResponseEntity<List<ClienteCartao>> findAll(){
        return ResponseEntity.ok(clienteCartaoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteCartao> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(clienteCartaoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<ClienteCartao> create(@RequestBody ClienteCartao clienteCartao){
        return ResponseEntity.ok(clienteCartaoService.save(clienteCartao));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteCartao> update(@RequestBody ClienteCartao clienteCartao){
        return ResponseEntity.ok(clienteCartaoService.save(clienteCartao));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<ClienteCartao> delete(@PathVariable Integer id){
        ClienteCartao clienteCartao = clienteCartaoService.findById(id);
        clienteCartaoService.delete(clienteCartao);
        return ResponseEntity.ok(clienteCartao);
    }
    
}
