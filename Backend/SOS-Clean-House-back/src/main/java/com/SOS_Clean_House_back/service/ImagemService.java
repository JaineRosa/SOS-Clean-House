package com.SOS_Clean_House_back.service;

import org.apache.tika.Tika;
import org.springframework.stereotype.Service;

@Service
public class ImagemService {

    private static final Tika tika = new Tika();

    public String getTipoImagem(byte[] imageBytes) {
        return tika.detect(imageBytes);
    }

}
