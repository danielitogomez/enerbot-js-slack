# Enerbot JS

El bot mas maravilloso de la galaxia. Ni Thanos pudo con el

## Como empezar?

Descarga(clone, fork, etc) el repositorio

### Prerequisites

Nodejs > 8.10

### Instalación

```
npm install
```
### Ejecución

Para correr en local el bot
```
npm run inspect
```
Despues mediante curl por ejemplo puedes llamarlo de la siguiente forma

```
curl -d "text=cuanto para el 18" -X POST http://localhost:3000

```


## Tests

Para los tests se está utilizando [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Sinon](https://sinonjs.org/) y [Proxiquire](https://github.com/thlorenz/proxyquire) como librerías base.
```
npm test
```

## Covertura de tests

Para calcular la covertura de tests se está utilizando Istanbul con NYC.

Al correr el comado de tests también se verifica la cobertura y muestra un resumen al final
```
-----------------|----------|----------|----------|----------|-------------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |      100 |      100 |      100 |      100 |                   |
 enerbot         |      100 |      100 |      100 |      100 |                   |
  command.js     |      100 |      100 |      100 |      100 |                   |
 enerbot/lib     |      100 |      100 |      100 |      100 |                   |
  Coa.js         |      100 |      100 |      100 |      100 |                   |
  Engel.js       |      100 |      100 |      100 |      100 |                   |
  ModulesConf.js |      100 |      100 |      100 |      100 |                   |
  Quote.js       |      100 |      100 |      100 |      100 |                   |
  Runner.js      |      100 |      100 |      100 |      100 |                   |
  System.js      |      100 |      100 |      100 |      100 |                   |
  TimeTo.js      |      100 |      100 |      100 |      100 |                   |
-----------------|----------|----------|----------|----------|-------------------|
```

## Formateo de código

Se utiliza [prettier](https://prettier.io/) como formateador de código y se disponibiliza 2 comandos para esto.

```
npm run check-code-format
```
Este comando verifica que todas las reglas de formato esten correctas

```
npm run fix-code-format
```
Este comando arregla los problemas de formato de código

## Deployment

El proyecto está configurado en [NOW](https://zeit.co/now) para que cada nuevo PR cree un nuevo artefacto y así poder realizar sus pruebas. Esto se explica mas en [Contributing](CONTRIBUTING.md)

## Contribuciones

Por favor leer [CONTRIBUTING.md](CONTRIBUTING.md) para mas detalles

