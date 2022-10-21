package com.szczekulskij.monetmethis.controller;

import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputFilter.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.apache.commons.io.IOUtils;
import java.nio.file.Paths;
import java.nio.file.Path;

import com.szczekulskij.monetmethis.service.FileLoadingService;


@RestController
@RequestMapping("/images")
public class ImageUploadController {

    @Autowired
    FileLoadingService fileLoadingService;

    @GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> randomNonMonet(){
        Resource file = fileLoadingService.loadImage("none", false);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
    @GetMapping(value = "/monet/original", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> randomMonet(){
        Resource file = fileLoadingService.loadImage("monet", true);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @GetMapping(value = "/monet/generated", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> randomMonetsque(){
        Resource file = fileLoadingService.loadImage("monet", false);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

}