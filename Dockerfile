# Utilise l'image de base Node.js
FROM node:latest

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers de l'application
COPY . .

# Installe les dépendances
RUN npm install

# Expose le port 3000
EXPOSE 3000

# Lance l'application
CMD ["npm", "run", "start"]
