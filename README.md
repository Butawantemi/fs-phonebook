# Containerized Phonebook Application

A full-stack Phonebook web application containerized with Docker and orchestrated using Docker Compose behind an Nginx reverse proxy.

## Architecture

- **Frontend (`phonebook-frontend`):** React + Vite application served via Nginx in production or Vite dev server in development.
- **Backend (`phonebook-backend`):** Node.js + Express REST API running on port `3001`.
- **Database (`mongo`):** MongoDB container with persistent volume storage and automated user initialization (`mongo-init.js`).
- **Reverse Proxy (`nginx`):** Routes `/` to the frontend and `/api/` to the backend, exposing the application on port `8080`.

## Running the Application

### Production Mode

Build and start the optimized multi-stage containers in the background:

```bash
docker compose up --build -d
```

Access the application at `http://localhost:8080`.

To stop the production containers:

```bash
docker compose down
```

### Development Mode

Start the development environment with volume mounts and live code reloading:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Access the application at `http://localhost:8080`. Any edits made to `phonebook-frontend` or `phonebook-backend` will automatically reload.

To stop the development containers:

```bash
docker compose -f docker-compose.dev.yml down
```
