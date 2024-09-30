# Tap-in Generator

**Tap-in Generator** est une application web qui génère des "tap-in" tweet très populaire sur twitter (pas forcement pertinent cela dit...)

## Fonctionnalités

- Génération automatique de tap-ins (tweets).
- Animation de statistiques simulées aléatoire pour chaque génération de tweets
- Interractions avec le bouton like, le logo et la certification
- Partage du site via le bouton share
- Affichage de l'heure actuel de l'utilisateur
- Animation de chargement lors du démarrage du site.
- Screamer lorsque la totalité des tap-in ont été généré

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Skitch49/tap-in-generator.git
   ```

2. Pour ajouter vos tap-in personnalisés

Ajouter vos tap-in dans un fichier **data.js** située dans **assets/js**
Sous la forme d'objet dans le tableau all_tap_in

```bash
const all_tap_in = [
    {
        name: "texte du tap-in",
        img: "nom de l'image",
    },
]
```

mettre les images du tap-in personnalisé dans le dossier **tap-in** situer dans **assets/img**

3. Ouvrez le fichier index.html dans votre navigateur

## Lien vers le projet
Le projet est disponible en ligne à l'adresse suivante : https://tap-in-generator.alexis-delaunay.fr