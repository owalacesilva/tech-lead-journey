docker-up:
	sudo docker compose --env-file .environment up

docker-down:
	docker compose --env-file .environment down

docker-build:
	docker compose --env-file .environment build

docker-restart:
	docker compose --env-file .environment down
	docker compose --env-file .environment up

docker-logs:
	docker compose --env-file .environment logs -f

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
