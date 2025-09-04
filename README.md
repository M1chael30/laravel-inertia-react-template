# 🚀 Project Setup Guide

This guide will walk you through setting up the project locally.  

---

## 📌 Prerequisites
Before starting, make sure you have the following installed on your machine:
- [Composer](https://getcomposer.org/)  
- [Node.js & NPM](https://nodejs.org/)
- [Xampp latest version](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/)
- PHP >= 8.x  
- Laravel >= 10.x (included in this project)  

---

## ⚡ Installation Steps

### 1️⃣ Install PHP Dependencies
Run the following command to install all PHP dependencies using Composer:
```bash
composer install

```
2️⃣ Install JavaScript Dependencies & Build Assets
Next, install the JavaScript dependencies and build the frontend assets:
```bash
npm install && npm run build

```
3️⃣ Generate Application Key
Generate the Laravel application key (required for encryption and sessions):
```bash
php artisan key:generate

```
4️⃣ Run Database Migrations
By default, the project uses SQLite. Run the migrations to set up the database:
```bash
php artisan migrate

```
5️⃣ Start the Development Server
Finally, start the Laravel development server:
```bash
composer run dev

```
🎉 Done!
The project should now be running locally at:
👉 http://localhost:8000


