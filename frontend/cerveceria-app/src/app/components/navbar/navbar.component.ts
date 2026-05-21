// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <span class="brand-icon">🍺</span>
        <span class="brand-name">CerveceriaApp</span>
      </div>
      <ul class="navbar-links">
        <li>
          <a routerLink="/home" routerLinkActive="active">Inicio</a>
        </li>
        <li>
          <a routerLink="/catalog" routerLinkActive="active">Catálogo</a>
        </li>
        <li>
          <a routerLink="/add-beer" routerLinkActive="active" class="btn-add">
            + Añadir Cerveza
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: #1a1a2e;
      color: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .navbar-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .brand-icon { font-size: 1.8rem; }
    .navbar-links {
      display: flex;
      list-style: none;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }
    .navbar-links a {
      color: #ccc;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s;
    }
    .navbar-links a:hover,
    .navbar-links a.active { color: #f5a623; }
    .btn-add {
      background: #f5a623;
      color: #1a1a2e !important;
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-weight: 700;
    }
    .btn-add:hover { background: #e09010; }
  `]
})
export class NavbarComponent {}
