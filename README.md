# Nexum — Landing page

Landing de una sola pantalla para **Nexum**, una app de finanzas personales que ayuda a registrar gastos, detectar los gastos hormiga y crear hábitos de ahorro sin vincular cuentas bancarias. Está hecha con React + Vite y es responsive para escritorio y celular.

## Ejecutar en local

```bash
npm install
npm run dev
```

Vite muestra la URL local (normalmente `http://localhost:5173/Nexum-Landing/`).

## Compilar

```bash
npm run build
```

El resultado queda en `dist/`. Para verlo en local:

```bash
npm run preview
```

## Analítica (Google Analytics)

La analítica solo se carga si la persona acepta las cookies en el banner. Para habilitarla:

1. Copia `.env.example` como `.env`.
2. Reemplaza `VITE_GA_ID=G-XXXXXXXXXX` por tu ID real de GA4 (por ejemplo `VITE_GA_ID=G-ABC123DEF4`).

El archivo `.env` está ignorado por Git y no debe subirse al repositorio. Si el ID sigue siendo el placeholder (`XXXX`), no se carga ningún script de seguimiento. En GitHub Pages el valor se configura como variable de repositorio `VITE_GA_ID`.

## Estructura

- `old/index.html`: respaldo del HTML original, fuente del diseño y del CSS.
- `src/App.css`: CSS original migrado sin cambios de reglas.
- `src/components/`: Header, SocialLinks, Hero, Footer y CookieBanner.
- `src/analytics.js`: carga condicional de gtag.
- `public/`: imagen hero, QR opcional y aviso de privacidad.

## Despliegue

El workflow `.github/workflows/deploy.yml` publica en GitHub Pages al hacer push a `main` o manualmente. Requiere la variable `VITE_GA_ID` en los ajustes del repositorio.
