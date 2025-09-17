# Etapa 1: Build
FROM node:22 AS build

WORKDIR /app

# Copiamos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

RUN npm install

# Copiamos todo el código y hacemos build
COPY . .
RUN npm run build

# Etapa 2: Servir la app
FROM nginx:alpine

# Copiamos los archivos de build a la carpeta que Nginx sirve
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 de Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
