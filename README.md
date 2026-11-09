# Portafolio Personal — Marck Alessandro

Portafolio web desarrollado con [Next.js](https://nextjs.org) y [Tailwind CSS](https://tailwindcss.com), con un diseño interactivo de dos columnas y arquitectura lista para producción.

## Secciones

- **Sobre Mí:** Perfil profesional y formación en Ingeniería de Sistemas (UNT).
- **Habilidades:** Tecnologías principales (Python, TypeScript, JavaScript, SQL) con sus herramientas asociadas.
- **Experiencia:** Trayectoria profesional en backend y full-stack (TRICKS SAC, Robotics Lab - LABCAM).
- **Educación:** Ingeniería de Sistemas (Pregrado) y Programa de Inglés Avanzado (C1).
- **Proyectos:** M-11 Digital Twin, E-Tricks Backend, Portal LABCAM y PROVALEX, con accesos a repositorios y aplicaciones en vivo.

## Desarrollo local

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Construcción para producción

```bash
npm run build
npm start
```

## Despliegue con Docker

### Opción 1: Docker Compose (Recomendado)
```bash
docker compose up -d --build
```

### Opción 2: Docker CLI
```bash
# Construir la imagen
docker build -t marck-portfolio .

# Correr el contenedor
docker run -d -p 3000:3000 --name marck-portfolio marck-portfolio
```
El portafolio estará disponible en [http://localhost:3000](http://localhost:3000).
