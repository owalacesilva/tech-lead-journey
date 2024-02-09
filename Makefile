docker-up:
	sudo docker compose --env-file .env up

docker-down:
	docker compose --env-file .env down

docker-build:
	docker compose --env-file .env build

docker-restart:
	docker compose --env-file .env down
	docker compose --env-file .env up

docker-logs:
	docker compose --env-file .env logs -f

docker-user-bash:
	docker compose exec user bash

docker-product-bash:
	docker compose exec product bash

docker-auction-bash:
	docker compose exec auction bash

docker-bid-bash:
	docker compose exec bid bash

docker-mail-bash:
	docker compose exec mail bash
