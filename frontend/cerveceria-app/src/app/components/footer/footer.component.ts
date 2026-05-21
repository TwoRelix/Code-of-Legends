// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>🍺 CerveceriaApp {{ currentYear }} — Proyecto Spring Boot + Angular</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 1rem;
      background: #1a1a2e;
      color: #888;
      font-size: 0.85rem;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
