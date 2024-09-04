package com.SOS_Clean_House_back.repository;

import com.SOS_Clean_House_back.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Integer> {
}
