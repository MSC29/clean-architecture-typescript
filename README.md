# Clean architecture: typescript

A Clean Archtiecture template for a Rest API in typescript

# How it works

TODO: proper doc & link to Rust & TypeScript repo

TODO: documenting key interfaces & classes for clearer understanding & to evidence benefits of Clean Architecture

# Installing

I personnaly use [pipx](https://github.com/pypa/pipx/), [pyenv](https://github.com/pyenv/pyenv) & [pipenv](https://github.com/pypa/pipenv).

```bash
pipenv install -r requirements.txt
# OR
pip install -r requirements.txt
```

# Running

define the environment on which we're running by adding `ENV=<env>`, which will use the `.env.<env>` file

```bash
ENV=dev python main.py
```

# Code quality & security

Used in CI/CD; using setup.cfg to centralise all the config

```bash
autopep8 -i -r --global-config=setup.cfg ./src
pylint --rcfile=setup.cfg ./src
flake8 --config=setup.cfg ./src
mypy --config-file=setup.cfg ./src
```

# Testing

```bash
ENV=test pytest
```

# API Documentation

`http://127.0.0.1:8080/docs`
