package com.nttdata.beerreview.services;

import com.nttdata.beerreview.dtos.BreweryDTO;
import java.util.List;

public interface BreweryService {
    List<BreweryDTO> listarTodas();
}