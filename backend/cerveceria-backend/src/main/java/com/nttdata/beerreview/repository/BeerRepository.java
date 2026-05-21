package com.nttdata.beerreview.repository;

import com.nttdata.beerreview.model.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeerRepository extends JpaRepository<Beer, Long> {
    List<Beer> findByBreweryId(Long breweryId);
}
