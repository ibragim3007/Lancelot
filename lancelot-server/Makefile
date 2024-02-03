build:
	docker build -t ibragimlol/lancelot-chat .
run:
	docker run -d -p 3000:3000 --env-file .env --rm --name lancelot-chat lancelot-chat
stop:
	docker stop lancelot-chat
push:
	docker push ibragimlol/lancelot-chat:latest