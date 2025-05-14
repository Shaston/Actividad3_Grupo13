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


## Resultados de Docker Scout

| Archivo | Descripción | CVEs encontradas |
|---------|-------------|------------------|
| [scout‑cves.sarif](security/reports/scout-cves.sarif) | Reporte SARIF para Code Scanning | Detected 1 vulnerable package with 1 vulnerability
| [sbom.json](security/reports/sbom.json) | SBOM CycloneDX de la imagen 'actividad3g13:dev'
| [scout‑cves.md](security/reports/scout-cves.md) | Tabla Markdown legible | Detected 1 vulnerable package with 1 vulnerability


### DeepSource

Herramienta usada para análisis estático (SAST) y detección de secretos.

| Archivo | Descripción |
|---------|-------------|
| [deepsource-issues.csv](security/reports/UA4/deepsource-issues.csv) | 1 secreto detectado (`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`) |
| [.deepsource.toml](.deepsource.toml) | Configuración de analizadores: JavaScript y Secrets |
| [Informe de análisis DeepSource](https://app.deepsource.com/report/0ead2f62-aee5-4887-9540-0817c20d78b1) | Informe generado con 1 secreto hardcodeado detectado (`SCT-A000`)
