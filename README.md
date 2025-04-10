# Secure To-Do App 

Este proyecto reutiliza una aplicación tipo To-Do escrita en Node.js y Express, contenida dentro de un contenedor Docker. El objetivo es aplicar prácticas de desarrollo seguro (S-SDLC).

---

## ▶️ Cómo ejecutar la aplicación

### Requisitos

- Docker Desktop instalado
- Acceso a terminal

### Pasos

```bash
docker build -t todo-app .
docker run -d -p 3000:3000 todo-app
