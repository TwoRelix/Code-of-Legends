package com.nttdata.beerreview.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;

public record SaveBeerDTO(
    @NotBlank(message = "El nombre no puede estar vacío")
    @Size(max = 100)
    String nombre,

    @NotBlank(message = "El estilo no puede estar vacío")
    String estilo,

    @NotNull(message = "La graduación es obligatoria")
    @PositiveOrZero(message = "La graduación no puede ser negativa")
    BigDecimal graduacionAlcoholemica,

    @Size(max = 255)
    String descripcion,

    @NotNull(message = "La cervecería es obligatoria")
    Long cerveceriaId
) {}