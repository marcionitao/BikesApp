package com.nitao.controllers;

import com.nitao.com.nitao.repository.BikesRepository;
import com.nitao.model.Bike;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/bikes")
public class BikeController {

    // private List<Bike> bikes = null;
    @Autowired
    private BikesRepository bikesRepository;

    @Autowired
    public BikeController(BikesRepository bikesRepository) {
        this.bikesRepository = bikesRepository;
    }
/*
    @RequestMapping("/")
    public String home() {
        return "index";
    }
*/
    @GetMapping("/allBikes")
    public List<Bike> getAllBikes() {

        return (List<Bike>) this.bikesRepository.findAll();
    }

    @GetMapping("/getBike/{id}")
    public Bike getBike(@PathVariable("id") Long id) {
        return bikesRepository.findOne(id);
    }

    @PostMapping("/createBike")
    public Bike createBike(@RequestBody Bike bike) {
        return bikesRepository.save(bike);
    }

    @PostMapping("/updateBike")
    public Bike updateBike(@RequestBody Bike bike) {
        return bikesRepository.save(bike);
    }

    @GetMapping("/deleteBike/{id}")
    public void deleteBike(@PathVariable("id") Long id) {
        bikesRepository.delete(id);
    }
}
