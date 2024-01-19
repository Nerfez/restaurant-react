# TP Restaurant Diginamic 2024 - Clément Olivier

### Site hébergé sur firebase
https://restaurant-diginamic-colivier.web.app

-----------------

### Base de donnée

Actuellement la base de donnée est lancé en local avec la commande :
```
json-server -w database/data.json
```

-----------------

### Connexion

Pour se connecter et apercevoir la base de donnée et interragir avec (créer un plat, le supprimer, trier les plats...) 
#### **user** : 
```
colivier@diginamic-formation.fr
```
#### **mot de passe** : 
```
DL9$7j5c5*@anZ
```

Mais bien entendu, vous pouvez très bien y ajouter un compte avec votre propre adresse mail.

-----------------

### Axe d'amélioration

Toutes les fonctionnalités demandées ont été respectées sauf  le footer car je ne comprends pas bien `gestion stock` et je n'ai pas ajouté les liens en bas de pages de l'accueil car je trouve ça redondant avec le header.
1. Ainsi je pense revoir la qualité de mon code pour les prochains jours. A savoir respecter les indentations, camelCase sur les variables et également beaucoup d'externalisation de code car certains fichiers font 300 lignes.
2. Héberger les données sur une vraie base de donnée
3. Améliorer le visuel, css
4. Gérer mieux les erreurs si pas d'accès connexion à la base de donnée

### Notes pour moi même

Commandes pour actualiser mes fichiers et les publier sur firebase :
```
npm run build
```

```
firebase deploy --only hosting
```
