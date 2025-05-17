up:
	docker compose up -d --build front

down:
	docker compose down

exec:
	docker exec -it my_front bash

ps:
	docker ps