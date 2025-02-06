# Sails.js Project PedidoAPI

Este repositorio contiene un servicio desarrollado con **Sails.js**. Sigue los pasos a continuación para instalar y ejecutar el servicio en tu entorno local.

## 🚀 Requisitos previos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Sails.js](https://sailsjs.com/) (versión 1.5 o superior)

### Verifica las versiones instaladas
Ejecuta los siguientes comandos para verificar que tienes las versiones correctas:

```sh
node -v  # Debe ser 16 o superior
npm -v   # Debe ser compatible con Node.js
sails -v # Debe mostrar Sails.js 1.5 o superior
```

Si no tienes Sails.js instalado, puedes instalarlo con el siguiente comando:

```sh
npm install -g sails
```

## 📦 Instalación

Clona el repositorio y navega a la carpeta del proyecto:

```sh
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

Instala las dependencias del proyecto:

```sh
npm install
```

Si prefieres `yarn`, usa:

```sh
yarn install
```

## ▶️ Ejecución del servicio
Para iniciar el servidor de desarrollo, usa el siguiente comando:

```sh
sails lift
```

O con un puerto específico:

```sh
sails lift 
```

Luego, abre en tu navegador o postman de acuerdo a las pruebas:

```
http://localhost:1337/
```



