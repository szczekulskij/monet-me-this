package com.szczekulskij.monetmethis.controller;

import java.io.IOException;
import java.io.InputStream;
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

import com.szczekulskij.monetmethis.service.FileStoreService;


@RestController
@RequestMapping("/fileDownload")
public class ImageUploadController {

    @Autowired
    FileStoreService fileStoreService;

    @GetMapping(value = "/randomNonMonet", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> randomNonMonet(){
        Resource file = fileStoreService.loadImage(false);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @GetMapping(value = "/new", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody byte[] getFile() throws IOException {
        Path nonMonetPhotosLocation = Paths.get("images/random_images/photo_jpg");
        String filepath = fileStoreService.randomFileNameGenerator(nonMonetPhotosLocation).toString();
        InputStream in = getClass().getResourceAsStream(filepath);
        return IOUtils.toByteArray(in);
    }

    @GetMapping(value = "/randomMonet", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> randomMonet(){
        Resource file = fileStoreService.loadImage(true);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

}