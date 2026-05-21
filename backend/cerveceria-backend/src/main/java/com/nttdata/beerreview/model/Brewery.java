package com.nttdata.beerreview.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "breweries")
@Data 
@NoArgsConstructor 
public class Brewery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID autoincremental en la base de datos
    private Long id;

    @Column(nullable = false)
    private String name;

    private String country;
    
    private String description;

    @OneToMany(mappedBy = "brewery", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference // Evita bucles infinitos al convertir a JSON
    private List<Beer> beers;
}