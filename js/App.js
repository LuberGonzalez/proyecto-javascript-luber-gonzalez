import { Navbar } from "./components/Navbar.js";

import { getAstronomyPictureOfTheDay } from './api/api.js';
import { Card } from "./components/Card.js";
import { Pages } from "./components/Pages.js";

export function App () {
    const $root = document.getElementById("root");
    
    const picturesContainer = document.createElement("div");
    picturesContainer.classList.add("pictures-container");

    console.log(picturesContainer);

    async function displayAstronomyPicturesOfTheWeek() {
      try {
        const data = await getAstronomyPictureOfTheDay({ count: 10 }); // Obtener 10 elementos

        data.forEach(element => {
            
            console.log(element);

            picturesContainer.appendChild(Card({
                date:element.date,
                explanation:element.explanation,
                title:element.title,
                url:element.url
            }));

        });

        console.log(data);
      } catch (error) {
        console.error('There was a problem displaying the astronomy pictures of the week:', error);
      }
    }
    
    displayAstronomyPicturesOfTheWeek();

    async function display() {
        const data = await getAstronomyPictureOfTheDay({ date: '2023-02-17' });
        console.log(data);

        console.log(data);

    }

    display();

$root.appendChild(Navbar());

$root.appendChild(picturesContainer);   

if (window.location.hash.includes("#/articulo")) {
    console.log("La URL contiene #/articulo");

    window.addEventListener('hashchange', async () => {
        const fragment = window.location.hash.substr(1); // Obtiene el fragmento de la URL después del #
        const match = fragment.match(/^\/articulo\/(.+)/); // Comprueba si el fragmento coincide con la ruta de un artículo
      
        if (match) {
          const title = match[1].replace(/-/g, ' '); // Obtiene el título del artículo y lo convierte en un formato legible
          // Realiza una consulta a la API utilizando el título como parámetro
          // Actualiza la interfaz de usuario para mostrar solo el artículo correspondiente
    
    
          // Obtener la fecha del artículo a mostrar a partir de la URL
        const articleDate = window.location.hash.replace('#/articulo/', '').replace(/-/g, '/');
    
        // Llamar a la función getAstronomyPictureOfTheDay con la fecha del artículo
        const article = await getAstronomyPictureOfTheDay({ date: articleDate });
    
        // Renderizar el artículo en la página
    
        picturesContainer.innerHTML = "";

        console.log(article);
    
        } else {
          // La URL no coincide con una ruta de artículo válida
          // Muestra una página de error o vuelve a la página de inicio
        }
      });
      



  } else {
    console.log("La URL no contiene #/articulo");
  }



  document.addEventListener("click",(e) => {


    if(e.target.matches(".title")){
        // console.log("HOLA");

        e.preventDefault();

        const date = e.target.dataset.date;;

        console.log(date);

        // Realizar la petición con la fecha
        
        getAstronomyPictureOfTheDay({ date })
            .then((data) => {
            // Mostrar la información del artículo en la página
            // const pageContainer = document.getElementById('page-container');
            // const articleHTML = `
            //     <div class="article">
            //     <img src="${data.url}" alt="${data.title}">
            //     <h2>${data.title}</h2>
            //     <p>${data.explanation}</p>
            //     </div>
            // `;
            // pageContainer.innerHTML = articleHTML;

            console.log(data);

            picturesContainer.innerHTML = "";


            picturesContainer.appendChild(Pages({

                date : data.date,
                explanation : data.explanation,
                title : data.title,
                url : data.url
            }));

            

            })
            .catch((error) => {
            console.error('Error:', error);
            });


    }

  })

}