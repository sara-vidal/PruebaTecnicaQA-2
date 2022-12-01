# Prueba técnica de QA DEV

## Introduction
### Ejercicio 2: Automatización de una web
Debes realizar una automatización consistente en:
1. Buscar en Google la palabra "automatización"
2. Buscar el link de la Wikipedia resultante
3. Comprobar en qué año se hizo el primer proceso automático
4. Realizar un screenshot de la página de la Wikipedia

## Prerequisites
* node version: 16.17.0
* npm version: 8.15.0

## Setup
For the project to work, it is necessary to install its dependencies. That can be achieved executing in root directory:
```
$ npm i
```
After installing the dependencies, to open the tests, run:
```
$ npm run test
```
To execute the tests in the terminal, run:
```
$ npm run terminal
```

## Output
The results are displayed in the browser or in the terminal, depending on whether the tests have been opened in the browser or run directly in the terminal, respectively. The screenshots can be found in the "cypress/screenshots" folder, and the videos (terminal execution) in the "cypress/videos" folder.  
* cypress/e2e/features/searchInGoogle.feature solves point 1
* cypress/e2e/features/accessWebsiteFromGoogleSearch.feature solves point 2
* cypress/e2e/features/searchInWikipedia.feature solves point 3
* cypress/e2e/features/takeScreenshot.feature solves point 4