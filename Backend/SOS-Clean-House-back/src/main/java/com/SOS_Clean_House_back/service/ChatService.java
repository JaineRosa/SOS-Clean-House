package com.SOS_Clean_House_back.service;

import com.SOS_Clean_House_back.model.Chat;
import com.SOS_Clean_House_back.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    ChatRepository chatRepository;

    public List<Chat> findAll(){
        return chatRepository.findAll();
    }

    public Chat findById(Integer id){
        return chatRepository.findById(id).orElse(null);
    }

    public Chat save(Chat chat){
        return chatRepository.save(chat);
    }

    public void delete(Chat chat){
        chatRepository.delete(chat);
    }
}
