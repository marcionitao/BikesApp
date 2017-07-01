package com.nitao;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BikeController {

    private List<Bike> bikes = null;

    @RequestMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/api/allBikes")
    public List<Bike> getAllBikes() {
        this.createBikes();
        return this.bikes;
    }

    private void createBikes() {
        bikes = new ArrayList<Bike>();
        bikes.add(new Bike(1, "CBR250R", "Honda"));
        bikes.add(new Bike(2, "Ninja250R", "Kaswasaki"));
        bikes.add(new Bike(3, "R1", "Yamaha"));
        bikes.add(new Bike(4, "FatBoy", "Harley Davidson"));
    }
}
