# 🚀 Angular Client Application

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)](https://rxjs.dev/)

## Overview

This repo contains the front-end client application built with Angular. The application provides a responsive user interface that communicates with my Spring Boot backend service Angular_Server_Fatty, see [https://github.com/BongaGougota0/Angular_Server_Fatty].

Nothing serious, I was just jogging my angular memory.

## 🔧 Technologies

- **Angular**: Modern single-page application framework
- **TypeScript**: Type-safe JavaScript superset
- **RxJS**: Reactive programming library

## 📋 Requirements

- Node.js (v16.x or later)
- npm (v8.x or later)
- Angular CLI (v14.x or later)

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:BongaGougota0/Angular_Client.git
   cd Angular_Client/client/BurgerClient
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

### Default Login Credentials

For development and testing purposes, you can use the following credentials:

- **Email**: phumi.thabethe@gmail.com
- **Password**: user1

- **Email**: mpumi.gongotha@gmail.com
- **Password**: user2

## 📂 Project Structure

```
src/
├── app/
│   ├── cart/              # Cart components# Reusable UI components
│   |-- cate-view
|   |-- footer             # reusable footer component
|   |-- nav                # reusable header+navigation component
...  etc ...               # each folder is a component
│   ├── models/            # TypeScript interfaces & models
│   ├── services/          # Application services
├── assets/                # Static assets
├── environments/          # Environment configuration
└── styles/                # Global styles
```