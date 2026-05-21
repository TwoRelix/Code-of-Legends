package com.nttdata.beerreview.dtos;

import java.math.BigDecimal;

public record BeerDTO(
    Long id,
    String nombre,
    String estilo,
    BigDecimal graduacionAlcoholemica,
    String descripcion,
    String cerveceriaNombre
){}

