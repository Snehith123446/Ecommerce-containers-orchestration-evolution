🐳 Standalone Docker Deployment

E-Commerce Multi-Service Application

This document describes how the application was deployed using manual Docker container orchestration on a single host.

At this stage, every container is managed individually without Compose or Swarm.

Services

🗄 MongoDB

🗄 MySQL

🔧 Node.js API

☕ Java API

🌐 Angular Client

🚦 NGINX (API Gateway)

🔹 Step 1 — Create Dedicated Network
=============================================================================================================================================
Create a user-defined bridge network to enable container-to-container DNS-based communication.

    docker network create E_commerece_App_network

🔹 Step 2 — Create Persistent Volumes
=============================================================================================================================================
     docker volume create mongo_data
     docker volume create mysql_data

Purpose:
mongo_data → Persists MongoDB data
mysql_data → Persists MySQL data


🔹 Step 3 — Run Database Containers FIRST
=============================================================================================================================================
🟢 MongoDB (emongo)

    docker run -d \
    --name emongo \
    --network E_commerece_App_network \
    -e MONGO_INITDB_DATABASE=epoc \
    -v mongo_data:/data/db \
    mongo

🟢 MySQL (emartdb)

    docker run -d \
    --name emartdb \
    --network E_commerece_App_network \
    -e MYSQL_ROOT_PASSWORD=emartdbpass \
    -e MYSQL_DATABASE=books \
    -v mysql_data:/var/lib/mysql \
    mysql

🔹 Step 4 — Run NGINX (API Gateway)
=============================================================================================================================================
    docker run -d \
    --name nginx \
    --network E_commerece_App_network \
    -p 80:80 \
    -v $(pwd)/nginx/apigateway/default.conf:/etc/nginx/conf.d/default.conf \
    --restart always \
    nginx:latest

Key Points:

Port 80 exposed to host

Custom reverse proxy configuration mounted

Auto-restart enabled

🔹 Step 5 — Run Backend Services
=============================================================================================================================================

🔧 Node.js API

    docker run -d \
    --name api \
    --network E_commerece_App_network \
    -p 5000:5000 \
    --restart always \
    snehith1071/nodeapi

☕ Java API
Java API

    docker run -d \
    --name webapi \
    --network E_commerece_App_network \
    -p 9000:9000 \
    --restart always \
    snehith1071/javaapi


🔹 Step 6 — Run Frontend (Angular Client)
=============================================================================================================================================
    docker run -d \
    --name client \
    --network E_commerece_App_network \
    -p 4200:4200 \
    snehith1071/client

Frontend traffic flows:

NGINX → Frontend → APIs → Databases

🔹 Verify Deployment

    docker ps

🌐 Access the Application
=============================================================================================================================================
Open browser:

     http://<server-ip>:80
