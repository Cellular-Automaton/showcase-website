set dotenv-load := true

build-docker:
    #!/usr/bin/env bash
    docker build -t showcase .

deploy:
    #!/usr/bin/env bash
    docker compose -f ./docker-compose.prod.yml up --build --detach
