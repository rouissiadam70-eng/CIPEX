# Tunisia Export Hub

Site vitrine institutionnel (React + Vite + CSS) inspiré de tunisiaexport.tn,
avec animations au scroll, compteurs animés, marquee de marchés et intégration
des réseaux sociaux réels (Facebook, Instagram, LinkedIn, YouTube).

## Lancer le projet

1. `npm install`
2. `npm run dev`
3. Ouvrir l'URL affichée dans le terminal (généralement http://localhost:5173)

## Build de production

`npm run build` puis `npm run preview` pour tester le résultat compilé.

## Structure

```
src/
  components/   composants React de chaque section
  hooks/        hook useReveal (animation au scroll)
  data/         liens des réseaux sociaux
  App.jsx       assemble toutes les sections
  App.css       feuille de style principale
```
