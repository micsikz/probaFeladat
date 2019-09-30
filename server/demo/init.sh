#!/bin/bash
echo "Starting DB..."
docker-compose up -d
sleep 15
echo "DB Started!"
echo "Init database and role"
docker exec -it server_my_postgres_1 psql -U postgres -c "create database DataEdge;"
docker exec -it server_my_postgres_1 psql -U postgres -c "create user DataEdge;"
docker exec -it server_my_postgres_1 psql -U postgres -c "alter user DataEdge with encrypted password '123456';"
docker exec -it server_my_postgres_1 psql -U postgres -c "grant all privileges on database DataEdge to DataEdge;"
echo "Init database and role ended!"
