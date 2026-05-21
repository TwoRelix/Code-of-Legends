package com.nttdata.beerreview.services.impl;

import com.nttdata.beerreview.dtos.BreweryDTO;
import com.nttdata.beerreview.repository.BreweryRepository;
import com.nttdata.beerreview.services.BreweryService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class BreweryServiceImpl implements BreweryService {

    private final BreweryRepository breweryRepository;

    public BreweryServiceImpl(BreweryRepository breweryRepository) {
        this.breweryRepository = breweryRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<BreweryDTO> listarTodas() {
        return breweryRepository.findAll()
        .stream()
        .map(b -> new BreweryDTO(b.getId(), b.getName()))
        .toList();
    }
}