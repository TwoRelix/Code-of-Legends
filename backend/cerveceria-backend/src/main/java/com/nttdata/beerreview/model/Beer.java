package com.nttdata.beerreview.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Table(name = "beer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Beer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    @Column(nullable = false)
    private String nombre;

    @NotBlank(message = "El estilo es obligatorio")
    private String estilo;

    @NotNull(message = "La graduación es obligatoria")
    @DecimalMin(value = "0.0")
    @Column(name = "graduacion_alcoholemica")
    private Double graduacionAlcoholemica;

    private String descripcion;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "brewery_id", nullable = false)
    private Brewery brewery;
}