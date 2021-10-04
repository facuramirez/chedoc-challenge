## Chedoc Challenge 
### Este proyecto es el resultado de una prueba técnica realizada como parte de una entrevista para la empresa "CHEDOC" (https://www.chedoc.com/centros), la cual consiste en una SPA que muestra información sobre diferentes series y películas. 
 
## Instrucciones para su ejecución: 
### Puede optar por dos (2) caminos:
1. Clonar este repositorio en su computadora: 
a) Una vez clonado, situarse en el directorio del repositorio y colocar **npm install** (deberá tener Nodejs instalado)
b) Desde ese mismo directorio correr el comando **npm run dev** 
2. Ingresar en su navegador la siguiente ruta https://chedoc-challenge-gdmr7pbm9-facu-ramirez.vercel.app/ 
 
## Información técnica: 
### La aplicación se realizó utilizando las siguientes tecnologías: 
* React 
* Nextjs 
* Redux 
* SASS 
* Bootstrap 
* TypeScript 
* Framer-Motion 
* Reactstrap

### La aplicación se construyó utilizando "React" porque así lo solicitaban en las instrucciones del challenge. Si bien no hizo falta hacer uso de los beneficios del SSR (server side rendering) ofrecido por "Nextjs", igualmente se utilizó por la facilidad ofrecida en cuanto al ruteo y por si en el futuro se desea anexar alguna api (para agregar mas series y películas por ejemplo). Se hizo uso de hooks como "useState" y "useEffect", así como también de "Redux" para facilitar la comunicación entre componentes. Para la maquetación se incluyó "Bootstrap" y tambien "SASS" haciendo uso de las funcionalidades que ofrece este último como ser la utilización de variables, mixins (funciones) y anidamiento de clases. En cuanto a las transiciones entre rutas se utilizó "Framer-Motion" otorgándole así un efecto mas dinámico. El popup se construyó con "Reactstrap". Finalmente queda por mencionar que en toda la aplicación se utilizó "TypeScript" 

## Mejoras y modificaciones
### Al realizar este challenge se intentó copiar de la mejor manera posible el formato establecido en la consigna. Sin embargo, realizaría las siguientes modificaciones y mejoras: 
* Previo a visualizar el sitio creado, colocaría una landing page con animaciones (y/o fotos) e información sobre lo que el usuario va a visualizar en la página. 
* En el Navbar colocaría el logo de la empresa que solicitó este proyecto. 
* El fondo blanco del Home en mi opinión deja muy vacía la página, debería ser un fondo temático.
* El footer me parecio bien, aunque agregaría datos de contacto. 
* Al ingresar tanto en "series" como en "movies" agregaría un buscador en el navbar (en la parte gris a la derecha del nombre de la sección) para facilitar la búsqueda de la serie/película.
* Agregaría filtros de ordenamiento en un panel a la izquierda que sean: alfabeticamente (ascendente y descendente) y también filtros por año (posteriormente se podrá ordenar alfabeticamente).
* Le pondría un paginado donde el usuario pueda optar por ver 5, 10 o 20 películas/series por página.
* Desarrollaría la sección de Login, con su respectivo formulario para poder registrarse y una vez logueado poder agregar otras series/películas a las ya ofrecidas por la página. 
* Agregaría al panel de la izquierda mencionado anteriormente una opción para filtrar por series/películas: "Ofrecidas por la página", "Propias", "De terceros", "Todas". 
* En el modal que aparece al hacer click en el título de la serie/película agregaría un link mas que redireccione a alguna página que permita poder ver la película.
* Para realizar lo anterior construiría el backend utilizando NodeJS y MongoDB. 
 
### *Espero que tanto la creación del sitio como las propuestas mencionadas sean de su agrado* 
 
### *Autor: Facundo Ramírez - Full Stack Web Developer* 
### *Contacto: +543764227220* 
### *LinkedIn: https://www.linkedin.com/in/facundoramirezok/*
