docker build -t v7dev -f Dockerfile.dev . && \
docker run -p 9000:9000 v7dev

# docker run -it v7dev sh