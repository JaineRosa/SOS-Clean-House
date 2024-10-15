package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.Cliente;
import com.SOS_Clean_House_back.service.ClienteService;
import com.SOS_Clean_House_back.service.ImagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @Autowired
    ImagemService imagemService;

    @GetMapping
    public ResponseEntity<List<Cliente>> findAll(){
        return ResponseEntity.ok(clienteService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(clienteService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Cliente> create(@RequestBody Cliente cliente){
        return ResponseEntity.ok(clienteService.save(cliente));
    }


    @PutMapping("/{id}")
    public ResponseEntity<Cliente> update(@RequestBody Cliente cliente){
        return ResponseEntity.ok(clienteService.save(cliente));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Cliente> delete(@PathVariable Integer id){
        Cliente cliente = clienteService.findById(id);
        clienteService.delete(cliente);
        return ResponseEntity.ok(cliente);
    }

    @PostMapping("/login")
    public ResponseEntity<Cliente> validarLogin(@RequestBody Map<String, Object> credenciais) {
        String email = credenciais.get("EMAIL").toString();
        String senha = credenciais.get("SENHA").toString();
        return ResponseEntity.ok(clienteService.validarLogin(email, senha));
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<String> uploadProfileImage(@PathVariable Integer id, @RequestParam("imagem") MultipartFile imagem) {
        try {
            if (!clienteService.uploadProfileImage(id, imagem)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
            }
            return ResponseEntity.ok("Imagem salva com sucesso!");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar imagem");
        }
    }

    @GetMapping("/{id}/imagem-perfil")
    public ResponseEntity<byte[]> getImagemPerfil(@PathVariable Integer id) {
        Cliente cliente = clienteService.findById(id);
        if (cliente == null || cliente.getFotoPerfil() == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        String tipoImagem = imagemService.getTipoImagem(cliente.getFotoPerfil());
        if (tipoImagem == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        MediaType mediaType = MediaType.parseMediaType(tipoImagem);
        return ResponseEntity.ok().contentType(mediaType).body(cliente.getFotoPerfil());
    }
}
