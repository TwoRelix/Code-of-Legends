package com.nttdata.beerreview.services;

import com.nttdata.beerreview.dtos.BeerDTO;
import com.nttdata.beerreview.dtos.SaveBeerDTO;
import java.util.List;

public interface BeerService {
    List<BeerDTO> listarTodas();
    BeerDTO buscarPorId(Long id);
    BeerDTO guardar(SaveBeerDTO saveBeerDTO);
    List<BeerDTO> listarPorCerveceria(Long breweryId);
}