package com.szczekulskij.monetmethis.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Random;
import java.util.stream.Collectors;


@Service
public class FileStoreService {

    Path monetPhotosLocation = Paths.get("images/artists/monet/monet_jpg");
    Path nonMonetPhotosLocation = Paths.get("images/random_images/photo_jpg");
    

    public Resource loadImage(boolean isMonet) {
        try {

            Path file;
            if (isMonet){ file = randomFileNameGenerator(monetPhotosLocation); }
            else { file = randomFileNameGenerator(nonMonetPhotosLocation); }
            // else { file = nonMonetPhotosLocation.resolve("0a0c3a6d07.jpg"); }
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
    
    public Path randomFileNameGenerator(Path folder_location){
        // Get list of all the files
        ArrayList<Path> allFiles = loadAllFiles(folder_location);

        // Get random number from 0 to len(List) - 1
        int listSize = allFiles.size();
        Random rand = new Random();
        int random = rand.nextInt(listSize);

        // Get random filename
        Path filename = allFiles.get(random);

        System.out.println("filename" + filename);
        
        return folder_location.resolve(filename);
    }

    public ArrayList<Path> loadAllFiles(Path folder_location)  {
        try {
            return (ArrayList<Path>) Files.walk(folder_location, 1)
                    .filter(path -> !path.equals(folder_location))
                    .map(folder_location::relativize).collect(Collectors.toList());
        }
        catch (IOException e) {
            try {
                throw new Exception("Failed to read stored files", e);
            } catch (Exception e1) {
                // TODO Auto-generated catch block
                e1.printStackTrace();
            }
        }
        return null;
    }
}
