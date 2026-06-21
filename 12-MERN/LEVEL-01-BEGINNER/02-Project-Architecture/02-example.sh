# Project Root folder structure scaffold
mkdir mern-app
cd mern-app

# 1. Create Server folder
mkdir server
cd server
npm init -y
npm install express mongoose dotenv
cd ..

# 2. Create Client folder
npm create vite@latest client -- --template react