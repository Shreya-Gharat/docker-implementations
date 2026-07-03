Docker Day 1: Container Basics

Today I learned the fundamental commands for managing Docker containers locally using the CLI and Docker Desktop.

Core Commands Learned:
docker run nginx:1.23 - Pulls the Nginx image (if not already downloaded) and starts a container.
docker ps - Lists all currently running containers.
docker ps -a - Lists ALL containers, including stopped ones.
docker stop <container_id> - Gracefully shuts down a running container.
docker run -p 9000:80 nginx:1.23 - Runs a container and maps port 9000 on my Windows localhost to port 80 inside the container.
docker run --name shreya-web -p 9000:80 nginx:1.23 - Runs a container and assigns it a custom, readable name instead of a random one.
