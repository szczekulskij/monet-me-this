package com.szczekulskij.monetmethis.service;

// import com.webtutsplus.ecommerce.constants.Constants;
// import com.webtutsplus.ecommerce.exceptions.StorageException;
// import org.apache.commons.io.FilenameUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;
import java.util.stream.Stream;


@Service
public class FileStoreService {

    Path monetPhotosLocation = Paths.get("images/artists/monet/monet_jpg");
    Path nonMonetPhotosLocation = Paths.get("images/random_images/photo_jpg");

    public Resource loadImage(boolean isMonet) {
        try {

            Path file;
            if (isMonet){ file = monetPhotosLocation.resolve("0a5075d42a.jpg"); }
            else { file = nonMonetPhotosLocation.resolve("0a0c3a6d07.jpg"); }
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }
    
    // public String randomFileNameGenerator(Path folder_location){
    //     Path file = "0a5075d42a.jpg";
    //     return Path file;
    // }
}
