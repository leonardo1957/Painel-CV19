NAMEIMAGE=ceotech
PYTHON_VERSION := 3.8.5
PROJECT_NAME := ceotech
VENV_NAME := $(PROJECT_NAME)-$(PYTHON_VERSION)
DATABASE_PASS := postgres

run:
	docker build -t ceotech .
	docker run -d -p 8000:8000 --name app ceotech

create-venv: .create-venv setup

.create-venv: 
	pyenv install -s $(PYTHON_VERSION)
	pyenv uninstall -f $(VENV_NAME)
	pyenv virtualenv $(PYTHON_VERSION) $(VENV_NAME)
	pyenv local $(VENV_NAME)


.pip:
	pip install pip --upgrade

setup: .pip
	pip install -U setuptools
	pip install -r requirements.txt

# Postgres Local
run-postgres:
	docker start ceotech-postgres 2>/dev/null || docker run --name ceotech-postgres -p 5432:5432 -e POSTGRES_PASSWORD='$(DATABASE_PASS)' -d postgres:10-alpine

test:
	pytest -v --cov-report=term-missing --cov-report=html --cov-report=xml --cov-fail-under=80
