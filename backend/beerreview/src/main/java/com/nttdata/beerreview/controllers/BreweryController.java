package com.nttdata.beerreview.controllers;

import com.nttdata.beerreview.dtos.BreweryDTO;
import com.nttdata.beerreview.services.BreweryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/breweries")
@CrossOrigin(origins = "http://localhost:4200")
public class BreweryController {

    private final BreweryService breweryService;

    public BreweryController(BreweryService breweryService) {
        this.breweryService = breweryService;
    }

    @GetMapping
    public ResponseEntity<List<BreweryDTO>> getBreweries() {
        return ResponseEntity.ok(breweryService.listarTodas());
    }
}