package com.SOS_Clean_House_back.controller;

import com.SOS_Clean_House_back.model.Chat;
import com.SOS_Clean_House_back.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    ChatService chatService;

    @GetMapping
    public ResponseEntity<List<Chat>> findAll(){
        return ResponseEntity.ok(chatService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chat> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(chatService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Chat> create(@RequestBody Chat chat){
        return ResponseEntity.ok(chatService.save(chat));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Chat> update(@RequestBody Chat chat){
        return ResponseEntity.ok(chatService.save(chat));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Chat> delete(@PathVariable Integer id){
        Chat chat = chatService.findById(id);
        chatService.delete(chat);
        return ResponseEntity.ok(chat);
    }
}
