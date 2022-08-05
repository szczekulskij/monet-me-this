package com.szczekulskij.monetmethis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;

import com.szczekulskij.monetmethis.service.FileStoreService;


@RestController
@RequestMapping("/fileDownload")
public class ImageUploadController {

    @Autowired
    FileStoreService fileStoreService;

    @GetMapping("/randomNonMonet")
    public ResponseEntity<Resource> randomNonMonet(){
        Resource file = fileStoreService.loadImage(false);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @GetMapping("/randomMonet")
    public ResponseEntity<Resource> randomMonet(){
        Resource file = fileStoreService.loadImage(true);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

}