# Clean architecture: typescript

A Clean Archtiecture template for a Rest API in typescript

# How it works

TODO: proper doc & link to Rust & TypeScript repo

TODO: documenting key interfaces & classes for clearer understanding & to evidence benefits of Clean Architecture

# Installing

```bash
npm i
```

# Database setup

It's currently configued to run with Postgresl through TypeOrm (ORM), but this being clean architecture feel free to change it :)

I suggest

- postgresql [in docker](https://hub.docker.com/_/postgres/)
- pgAdmin [install](https://www.pgadmin.org/download/pgadmin-4-apt/)

create the databases (dev & test) based on the `.env.<env>` config  files.
The `synchronize` option is set to true in the TypeOrm connection configuration, so it'll automatically create the data model (and update it).

# Running

define the environment on which we're running by adding `ENV=<env>`, which will use the `.env.<env>` file

However, I'd suggest to use the npm scripts

```bash
npm run run-ts:dev
```

# Code quality & security

Used in CI/CD; code quality using EsLint with several plugins

```bash
npm run lint
npm run security:audit
```

# Testing

Here's what done in order to mock the SPI

- db: yml fixtures to insert test data in the test database, using `typeorm-fixtures-cli`
- http: create a fake api using `json-server` that serves the `db.json` content on the `routes.json` routes from the `test/integration_tests/mock_api` folder

run the mock api

```bash
npm run mock:api
```

run the tests

```bash
npm run test
# OR
npm run test:unit
npm run test:integration
```

# API Documentation

`http://127.0.0.1:8080/docs`
