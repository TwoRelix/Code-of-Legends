// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <div class="hero">
        <span class="hero-icon">🍺</span>
        <h1>Bienvenido a CerveceriaApp</h1>
        <p>Descubre y registra las mejores cervezas artesanales del mundo.</p>
        <div class="hero-actions">
          <a routerLink="/catalog" class="btn btn-primary">Ver Catálogo</a>
          <a routerLink="/add-beer" class="btn btn-secondary">+ Añadir Cerveza</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    }
    .hero {
      text-align: center;
      color: white;
      padding: 2rem;
    }
    .hero-icon { font-size: 5rem; }
    h1 {
      font-size: 2.5rem;
      margin: 1rem 0 0.5rem;
      color: #f5a623;
    }
    p { color: #aaa; font-size: 1.1rem; margin-bottom: 2rem; }
    .hero-actions { display: flex; gap: 1rem; justify-content: center; }
    .btn {
      padding: 0.7rem 1.8rem;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 700;
      font-size: 1rem;
      transition: transform 0.2s, opacity 0.2s;
    }
    .btn:hover { transform: translateY(-2px); opacity: 0.9; }
    .btn-primary { background: #f5a623; color: #1a1a2e; }
    .btn-secondary {
      background: transparent;
      color: #f5a623;
      border: 2px solid #f5a623;
    }
  `]
})
export class HomeComponent {}
