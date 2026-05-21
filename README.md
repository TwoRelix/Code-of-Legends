# 🍺 Code-of-Legends — CerveceriaApp

Aplicación web fullstack para explorar y registrar cervezas artesanales. Desarrollada como proyecto de reto NTT.

---

## 📁 Estructura del repositorio

```
Code-of-Legends/
├── backend/
│   └── cerveceria-backend/     # API REST con Spring Boot
└── frontend/
    └── cerveceria-app/         # SPA con Angular 21
```

---

## ⚙️ Backend — Spring Boot

### Requisitos
- Java 17
- Maven 3.8+

### Arrancar

```bash
cd backend/cerveceria-backend
./mvnw spring-boot:run
```

El servidor arranca en **http://localhost:8080**

### Endpoints disponibles

| Método | URL | Descripción |
|---|---|---|
| GET | `/api/breweries` | Lista todas las cervecerías |
| GET | `/api/breweries/{id}` | Una cervecería por ID |
| GET | `/api/breweries/{id}/beers` | Cervezas de una cervecería |
| GET | `/api/beers` | Catálogo completo de cervezas |
| GET | `/api/beers/{id}` | Una cerveza por ID |
| POST | `/api/beers?breweryId={id}` | Registrar una nueva cerveza |

### Consola H2 (base de datos en memoria)

Disponible en **http://localhost:8080/h2-console**

- JDBC URL: `jdbc:h2:mem:cerveceriadb`
- Usuario: `sa`
- Contraseña: *(vacía)*

### Datos iniciales (seed)

Al arrancar se cargan automáticamente **3 cervecerías** y **7 cervezas** de ejemplo desde `data.sql`.

---

## 🎨 Frontend — Angular 21

### Requisitos
- Node.js 18+
- Angular CLI 17+

```bash
npm install -g @angular/cli
```

### Instalar dependencias y arrancar

```bash
cd frontend/cerveceria-app
npm install
ng serve
```

La app abre en **http://localhost:4200**

> ⚠️ Para ver las cervezas en el catálogo, el backend debe estar corriendo en el puerto 8080.

### Rutas de la aplicación

| Ruta | Componente | Descripción |
|---|---|---|
| `/home` | `HomeComponent` | Pantalla de bienvenida |
| `/catalog` | `BeerCatalogComponent` | Catálogo de cervezas |
| `/add-beer` | `AddBeerComponent` | Formulario para registrar cerveza |

### Arquitectura

- **Standalone Components** — sin `app.module.ts`
- **Angular Signals** — estado reactivo en `BeerCatalogComponent`
- **Lazy loading** — cada ruta carga su componente bajo demanda

---

## 🚀 Arrancar el proyecto completo

Abre **dos terminales** en paralelo:

```bash
# Terminal 1 — Backend
cd backend/cerveceria-backend
./mvnw spring-boot:run

# Terminal 2 — Frontend
cd frontend/cerveceria-app
npm install
ng serve
```

Abre **http://localhost:4200** en el navegador.

---

