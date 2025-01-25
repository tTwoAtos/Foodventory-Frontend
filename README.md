#Requirement

Ionic/cli V8
Angular V18
Ionci angular lastest

# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Installation

1. Télécharger les extensions eslint et Prettier - Code formatter
2. Appuyez sur Ctrl + , pour ouvrir les paramètres.
3. Dans la barre de recherche des paramètres, tapez 'format on save'.
   Cochez la case Editor: Format On Save pour activer le formatage automatique lors de la sauvegarde.
   Toujours dans les paramètres, recherchez 'default formatter' et changer pour mettre prettier.
4. Ouvrez generate-apis.bat a la racine du projet et commentez les lignes correspondant aux microservices
   que vous n'avez pas sur votre PC.
   Assurez vous que tout les autres microservices sont en train de tourner, ainsi que la gateway et lancer la commande `npm run generate-apis`

## Development server

Run `ionic serve -p 4200` for a dev server with port 4200. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g c component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## husky

Will format and lint your code before commiting
Will run test before pushing
