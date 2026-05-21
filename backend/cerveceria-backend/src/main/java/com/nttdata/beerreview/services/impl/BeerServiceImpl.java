package com.nttdata.beerreview.services.impl;

import com.nttdata.beerreview.dtos.BeerDTO;
import com.nttdata.beerreview.dtos.SaveBeerDTO;
import com.nttdata.beerreview.model.Beer;
import com.nttdata.beerreview.model.Brewery;
import com.nttdata.beerreview.repository.BeerRepository;
import com.nttdata.beerreview.repository.BreweryRepository;
import com.nttdata.beerreview.services.BeerService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BeerServiceImpl implements BeerService {

    private final BeerRepository beerRepository;
    private final BreweryRepository breweryRepository;

    public BeerServiceImpl(BeerRepository beerRepository, BreweryRepository breweryRepository) {
        this.beerRepository = beerRepository;
        this.breweryRepository = breweryRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<BeerDTO> listarTodas() {
        return beerRepository.findAll().stream().map(this::convertToDTO).toList();
    }

    @Override
    @Transactional(readOnly = true)
    public BeerDTO buscarPorId(Long id) {
        return beerRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new RuntimeException("Cerveza no encontrada con ID: " + id));
    }

    @Override
    @Transactional
    public BeerDTO guardar(SaveBeerDTO dto) {
        Brewery brewery = breweryRepository.findById(dto.cerveceriaId())
                .orElseThrow(() -> new RuntimeException("La cervecería asociada no existe"));

        Beer beer = new Beer();
        beer.setNombre(dto.nombre());
        beer.setEstilo(dto.estilo());
        beer.setGraduacionAlcoholemica(dto.graduacionAlcoholemica());
        beer.setDescripcion(dto.descripcion());
        beer.setBrewery(brewery);

        Beer savedBeer = beerRepository.save(beer);
        return convertToDTO(savedBeer);
    }

    @Override
    @Transactional(readOnly = true)
    public List<BeerDTO> listarPorCerveceria(Long breweryId) {
        return beerRepository.findByBreweryId(breweryId).stream().map(this::convertToDTO).toList();
    }

    private BeerDTO convertToDTO(Beer beer) {
        return new BeerDTO(
                beer.getId(),
                beer.getNombre(),
                beer.getEstilo(),
                beer.getGraduacionAlcoholemica(),
                beer.getDescripcion(),
                beer.getBrewery() != null ? beer.getBrewery().getNombre() : "Sin cervecería");
    }
}