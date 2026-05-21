package com.nttdata.beerreview.controllers;

import com.nttdata.beerreview.dtos.BeerDTO;
import com.nttdata.beerreview.dtos.SaveBeerDTO;
import com.nttdata.beerreview.services.BeerService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/beers")
@CrossOrigin(origins = "http://localhost:4200")
public class BeerController {

    private final BeerService beerService;

    public BeerController(BeerService beerService) {
        this.beerService = beerService;
    }

    @GetMapping
    public ResponseEntity<List<BeerDTO>> getBeers() {
        return ResponseEntity.ok(beerService.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BeerDTO> getBeerById(@PathVariable Long id) {
        return ResponseEntity.ok(beerService.buscarPorId(id));
    }

    @GetMapping("/brewery/{breweryId}")
    public ResponseEntity<List<BeerDTO>> getBeersByBrewery(@PathVariable Long breweryId) {
        return ResponseEntity.ok(beerService.listarPorCerveceria(breweryId));
    }

    @PostMapping
    public ResponseEntity<BeerDTO> createBeer(@Valid @RequestBody SaveBeerDTO saveBeerDTO) {
        BeerDTO newBeer = beerService.guardar(saveBeerDTO);
        return new ResponseEntity<>(newBeer, HttpStatus.CREATED);
    }
}
