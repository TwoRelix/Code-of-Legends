// src/app/components/beer-catalog/beer-catalog.component.ts
import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

// Interfaces (modelos de datos)
interface Brewery {
  id: number;
  nombre: string;
  pais: string;
}

interface Beer {
  id: number;
  nombre: string;
  estilo: string;
  graduacionAlcoholemica: number;
  descripcion: string;
  brewery: Brewery;
}

@Component({
  selector: 'app-beer-catalog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="catalog-page">
      <div class="catalog-header">
        <h2>🍺 Catálogo de Cervezas</h2>
        <p>{{ totalCervezas() }} cervezas disponibles</p>
      </div>

      <!-- Estado: Cargando -->
      @if (isLoading()) {
        <div class="state-message">
          <span class="spinner">⏳</span>
          <p>Cargando cervezas...</p>
        </div>
      }

      <!-- Estado: Error -->
      @if (hasError()) {
        <div class="state-message error">
          <span>❌</span>
          <p>Error al cargar las cervezas. ¿Está el servidor encendido?</p>
          <button (click)="loadBeers()">Reintentar</button>
        </div>
      }

      <!-- Catálogo de cards -->
      @if (!isLoading() && !hasError()) {
        <div class="beer-grid">
          @for (beer of beers(); track beer.id) {
            <div class="beer-card">
              <div class="beer-card-header">
                <span class="beer-emoji">🍺</span>
                <span class="beer-style-badge">{{ beer.estilo }}</span>
              </div>
              <div class="beer-card-body">
                <h3 class="beer-name">{{ beer.nombre }}</h3>
                <p class="beer-brewery">
                  🏭 {{ beer.brewery?.nombre }} — {{ beer.brewery?.pais }}
                </p>
                <p class="beer-description">{{ beer.descripcion }}</p>
              </div>
              <div class="beer-card-footer">
                <span class="abv-badge">{{ beer.graduacionAlcoholemica }}% ABV</span>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .catalog-page {
      padding: 2rem;
      background: #f4f1ec;
      min-height: 100vh;
    }
    .catalog-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    .catalog-header h2 {
      font-size: 2rem;
      color: #1a1a2e;
      margin-bottom: 0.3rem;
    }
    .catalog-header p { color: #888; }

    /* Estados de carga/error */
    .state-message {
      text-align: center;
      padding: 3rem;
      color: #666;
    }
    .state-message.error { color: #c0392b; }
    .state-message button {
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      background: #f5a623;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 700;
    }
    .spinner { font-size: 2rem; animation: spin 1s linear infinite; display: block; }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Grid de cards */
    .beer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .beer-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      flex-direction: column;
    }
    .beer-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }
    .beer-card-header {
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .beer-emoji { font-size: 2.5rem; }
    .beer-style-badge {
      background: #f5a623;
      color: #1a1a2e;
      padding: 0.2rem 0.7rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    .beer-card-body { padding: 1.2rem; flex: 1; }
    .beer-name {
      font-size: 1.2rem;
      color: #1a1a2e;
      margin: 0 0 0.4rem;
    }
    .beer-brewery {
      font-size: 0.85rem;
      color: #888;
      margin-bottom: 0.7rem;
    }
    .beer-description {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
    }
    .beer-card-footer {
      padding: 0.8rem 1.2rem;
      border-top: 1px solid #f0f0f0;
    }
    .abv-badge {
      background: #1a1a2e;
      color: #f5a623;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 700;
    }
  `]
})
export class BeerCatalogComponent implements OnInit {

  // 🔵 SIGNALS — Estado reactivo de la UI
  beers = signal<Beer[]>([]);
  isLoading = signal<boolean>(false);
  hasError = signal<boolean>(false);

  // 🟡 COMPUTED SIGNAL — Se recalcula automáticamente cuando cambia 'beers'
  totalCervezas = computed(() => this.beers().length);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBeers();
  }

  loadBeers(): void {
    this.isLoading.set(true);
    this.hasError.set(false);

    this.http.get<Beer[]>('http://localhost:8080/api/beers').subscribe({
      next: (data) => {
        this.beers.set(data);      // Actualiza el signal con los datos reales
        this.isLoading.set(false);
      },
      error: () => {
        this.hasError.set(true);   // Signal de error activado
        this.isLoading.set(false);
      }
    });
  }
}
