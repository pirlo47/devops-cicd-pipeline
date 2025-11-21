# Cloud-Native System Monitor & CI/CD Pipeline

![Docker](https://img.shields.io/badge/Docker-Enabled-blue?logo=docker)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-Active-green?logo=githubactions)
![Node.js](https://img.shields.io/badge/Backend-Node.js-yellow?logo=nodedotjs)

A full-cycle DevOps project demonstrating the bridge between development and operations. This application is a real-time system health dashboard that visualizes critical server metrics (RAM usage, uptime, OS architecture, and container ID), automated via a robust CI/CD pipeline.

---

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started (Local)](#getting-started-local)
- [Running with Docker](#running-with-docker)
- [CI/CD Architecture](#cicd-architecture)

---

## 🔭 Project Overview
This project serves as a proof-of-concept for modern cloud-native development. It solves the "it works on my machine" problem by utilizing **Docker** for containerization and **GitHub Actions** for automated integration.

The application itself acts as a monitoring agent, exposing system-level data via a REST API and visualizing it on a decoupled frontend dashboard.

## ✨ Features
- **Real-Time Monitoring:** Live dashboard updating every 2 seconds.
- **System Introspection:** Displays OS platform, Kernel version, Container ID (Hostname), and Memory usage.
- **RESTful API:** Decoupled `/health` endpoint returning JSON metrics.
- **Dark Mode UI:** CSS3/HTML5 dashboard with responsive design.
- **Automated CI Pipeline:** Automatic testing, building, and pushing to Docker Hub on every commit.

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Runtime** | Node.js & Express | Lightweight backend server |
| **Containerization** | Docker | Optimized `alpine` Linux images |
| **Automation** | GitHub Actions | CI/CD workflow (Build -> Test -> Push) |
| **Registry** | Docker Hub | Image storage and versioning |
| **Frontend** | HTML5, CSS3, Vanilla JS | Zero-dependency client dashboard |

---

## 📂 Project Structure

```bash
├── .github/workflows
│   └── ci-pipeline.yml    # The Automation Logic (CI/CD)
├── public/
│   ├── index.html         # Dashboard Structure
│   ├── style.css          # UI Styling
│   └── script.js          # Client-side Fetch Logic
├── .dockerignore          # Build context optimization
├── .gitignore             # Git exclusion rules
├── Dockerfile             # Container blueprint
├── index.js               # Main Express server & API
└── package.json           # Dependencies and scripts
````

## 🚀 Getting Started (Local)
To run this project on your machine without Docker (requires Node.js installed):

Clone the repository
```bash
git clone https://github.com/pirlo47/devops-cicd-pipeline.git
cd devops-cicd-pipeline
```
Install Dependencies
```bash
npm install
```
Run the Server
```bash
npm start
```
Visit http://localhost:3000 to view the dashboard.

## 🐳 Running with Docker (Recommended)
To run the application in an isolated container (simulating the production environment):

Build the Image
```bash
docker build -t my-devops-app .
```
Run the Container (Maps port 3000 of the container to port 3000 on your host)
```bash
docker run -p 3000:3000 my-devops-app
```
Verify Open your browser at http://localhost:3000.

## ⚙️ CI/CD Architecture
This repository uses GitHub Actions to automate the delivery pipeline.

The Workflow (ci-pipeline.yml)
Trigger: Detects a push to the main branch.

Checkout: Pulls the latest code.

Authenticate: Logs into Docker Hub using encrypted GitHub Secrets.

Build: Creates a new Docker image based on the Dockerfile.

Push: Uploads the image to Docker Hub with two tags:

latest: For immediate deployment.

SHA: For version history and rollbacks.