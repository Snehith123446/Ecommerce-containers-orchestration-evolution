🚀 E-Commerce Container Orchestration Evolution
From Standalone Containers → Docker Compose → Docker Swarm

This repository demonstrates the architectural evolution of a multi-service e-commerce application across three levels of container maturity:

1️⃣ Standalone Docker (Manual Containers)
2️⃣ Docker Compose (Single-Host Orchestration)
3️⃣ Docker Swarm (Multi-Node Distributed Orchestration)


Services Included

🌐 Angular Frontend
🔧 Node.js API
☕ Java API
🗄 MongoDB
🗄 MySQL
🚦 NGINX Reverse Proxy

The same application was deployed across three different container orchestration models.

🔄 Evolution Overview
🔹 Stage 1 — Standalone Docker
Manual container execution using docker run.
Key Characteristics
Custom bridge network
Named volumes
Manual startup ordering
Per-container restart policies
Host-bound state

📂 Directory: 01-standalone-docker/
Learning Focus
Docker networking internals
Volume persistence
Reverse proxy routing
Service dependency sequencing

🔹 Stage 2 — Docker Compose

Declarative service definition using docker-compose.yml.

📂 Directory: 02-docker-compose/

What Improved
Infrastructure as Code
Automatic network creation
Centralized configuration
Single-command deployment
Key Realization
depends_on is not readiness management.
Compose improves structure —
but remains single-host.


🔹 Stage 3 — Docker Swarm

Multi-node orchestration with service abstraction.

Infrastructure Used

1 Manager Node
2 Worker Nodes

Overlay Network
Ingress Routing Mesh
Advanced Concepts Explored
Service-level abstraction
Overlay networking
Routing mesh
Placement constraints
Configs vs bind mounts
Rolling updates
Zero-downtime deployments
Database limitations in distributed systems

📁 Repository Structure
ecommerce-container-orchestration-evolution/
│
├── 01-standalone-docker/
├── 02-docker-compose/
├── 03-docker-swarm/


Each stage is independently documented.