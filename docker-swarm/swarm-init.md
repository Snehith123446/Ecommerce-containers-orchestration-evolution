🐳 Docker Swarm Cluster Initialization Guide

This document explains how the Docker Swarm cluster was initialized and configured for multi-node orchestration.

**Infrastructure Used**

1 Manager Node

2 Worker Nodes

Docker Engine installed on all nodes
Private network connectivity between nodes

🔹 Step 1 — Initialize Swarm (On Manager Node)
=================================================================================================================================================================
Run this on the machine designated as Manager:

      docker swarm init --advertise-addr <MANAGER-IP>

What This Does

→ Converts Docker Engine into Swarm mode

→ Creates cluster CA (Certificate Authority)

→ Generates worker & manager join tokens

→ Starts Raft consensus cluster

🔹 Step 2 — Join Worker Nodes
=================================================================================================================================================================
Run the join command on each worker node:

       docker swarm join --token <worker-token> <IP>:2377

🔹 Step 3 — Create Overlay Network
=================================================================================================================================================================
Create a Swarm overlay network:

    docker network create \
      --driver overlay \
      --attachable \
      ecommerce-overlay

services
=================================================================================================================================================================
🔹 Step 4 — Verify Swarm Mode

    docker info
Look for:

    Swarm: active
    NodeID: <id>
    Is Manager: true

🔹 Step 5 — Test Service Deployment
=================================================================================================================================================================

    docker service create \
      --name test-nginx \
      --replicas 3 \
      -p 8080:80 \
      --network ecommerce-overlay \
      nginx
Check service:

    docker service ls
    docker service ps test-nginx
This verifies:

→ Scheduling across worker nodes

→ Routing mesh functionality

→Service-level abstraction


