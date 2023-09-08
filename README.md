<img src="public/images/boldoMedio.png" align="right" />
 <h1 align= left ><b>Grupal 3 M8 / EquipoBoldo</b> <img src = "https://media.giphy.com/media/gF2m2JOyGReppog8hU/giphy.gif" width = 80px></h1>

<br>

<h2><b>Descripción del Proyecto "Gemas Preciosas"</b> <img src ="https://media.giphy.com/media/RIGGWvHpHhtQqJN8Hx/giphy.gif" width = 50px></h2>

📝 La joyería "Gemas Preciosas" es una empresa familiar que se dedica a la venta de joyas finas y
personalizadas. La joyería ha experimentado un crecimiento significaƟvo en los úlƟmos años y ha
decidido digitalizar su proceso de registro y seguimiento de joyas para mejorar la eficiencia y la gesƟón
de su inventario.
La joyería digital está tomando cada vez más forma, por lo que se han dado cuenta que para que el
registro de las joyas sea más intuiƟvo para el usuario, es necesario implementar una subida de imagen a
la joya, por lo tanto, te solicitan lo siguiente tomando el proyecto ya creado.  Disponibiliza una ruta que acepte dos parámetros, id de la joya y un archivo de imagen
 La imagen solo puede ser png y no puede superar los 5mb
 Además, con la imagen tendrás que crear un nombre único y añadirla a un directorio público para
poder verlas, ejemplo:
hƩp://localhost:3000/jewel/images/123/jewel_bnw_19072023.png

 La imagen debe tener el siguiente formato:
o Ancho 400px
o 1 versión blanco y negro
o 1 versión color
 Luego de crear las url asígnalas a una joya
 Disponibiliza una ruta que edite la imagen de una joya
o Ingresa los parámetros id joya y una imagen para editar
o Sube y crea la imagen url
o Reemplaza la url de imagen de la joya
o Responde al cliente con los datos de la joya incluidas las urls de las imágenes que acabas
de reemplazar
Consideraciones:  UƟliza un modelo EER
 Control de errores

<br>

<h2><b>Instrucciones de Instalación</b> <img src = "https://media.giphy.com/media/3WZJkScSyfYVl7mGLd/giphy.gif" width = 60px></h2> 

⚙️ Para instalar las dependencias necesarias, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   npm install

4. Abrir el archivo html ingresando al https://localhost:3000
5. Para ejecutar: node server.js o en su defecto con nodemon server.js


<br>

<details> <img src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFtdWgyMmFrcHd4NjhuZWJ4aDJpcTlkbWlyNGQ4dDJwa2ZwZmptcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/B4AgroOi1LkdPxMllY/giphy.gif" width = 50px> <summary><b>Ver las instrucciones</b></summary> 


1. Instalar las dependencias:

   ```sh
   npm install
   ```

2. En el caso de no poder instalar las dependencias:

   ```sh
   npm install --force
   ```

3. Las librerias que estamos ocupando `package.json`:

    ````sh
    ... 
    "name": "helpers",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    + "type": "module",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "multer": "^1.4.5-lts.1",
    "pg": "^8.11.3",
    "sharp": "^0.32.5"
    }
    ````

 
</details>

## Se Evalua :sparkles:

✨ Puntos a evaluar:
Consideraciones: 
 En esta etapa no es necesario la persistencia de datos. 
 Modulariza para un mejor orden. 
 La joya tendrá los siguientes atributos.
o Nombre
o Peso
o Precio
o Material 
o imagen_url 
 Añade control de errores.


<br>

<h2><b>Base de Datos</b> <img src ="https://media.giphy.com/media/EK5nB6wQKKN86j7GWx/giphy.gif" width = 50px></h2>

![Foto de BD]()

<br>

<h2><b>GITHUB</b> <img src ="https://media.giphy.com/media/WZAQgT7E0NBfYnvL1C/giphy.gif" width = 50px></h2>

1. Loreto Godoy : https://github.com/loreGodoyUp

2. Daniel Mendez : https://github.com/danimen81

3. Zimram Blanco : https://github.com/Zimram

4. Jose Fuentealba : https://github.com/JoseFelipeGeo

5. Boris Guiñez : https://github.com/boanguibe

6. Alfonso Mujica : https://github.com/ALFONSOMUJICAS

7. Felipe Andres Parra : https://github.com/33fparra


### Este proyecto está bajo la licencia ADALID.
<img src="public/images/boldoMedio.png" align="right" />

